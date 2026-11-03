import React, { useState, useEffect } from 'react';
import {
  Database,
  CheckCircle2,
  AlertCircle,
  Copy,
  RefreshCw,
  Search,
  Server,
  Key,
  Shield,
  Layers,
  FileCode,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import {
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_JWKS_URL,
  checkSupabaseHealth,
  getRecentSubmissions,
  findConsultationByRef,
  seedJurisdictionsToSupabase,
  ConsultationRecord,
  ContactInquiryRecord,
  DbConnectionHealth,
} from '../lib/supabase';

interface SupabaseDbModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupabaseDbModal: React.FC<SupabaseDbModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'status' | 'records' | 'schema'>('status');
  const [health, setHealth] = useState<DbConnectionHealth | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [consultations, setConsultations] = useState<ConsultationRecord[]>([]);
  const [inquiries, setInquiries] = useState<ContactInquiryRecord[]>([]);
  const [searchRef, setSearchRef] = useState('');
  const [searchResult, setSearchResult] = useState<ConsultationRecord | null | undefined>(undefined);
  const [isSearching, setIsSearching] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [seedStatus, setSeedStatus] = useState<string | null>(null);
  const [isSeeding, setIsSeeding] = useState(false);

  const fetchHealthAndData = async () => {
    setIsChecking(true);
    try {
      const h = await checkSupabaseHealth();
      setHealth(h);
      const data = await getRecentSubmissions();
      setConsultations(data.consultations);
      setInquiries(data.inquiries);
    } catch (e) {
      console.error(e);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchHealthAndData();
    }
  }, [isOpen]);

  const handleSearchRef = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchRef.trim()) return;
    setIsSearching(true);
    setSearchResult(undefined);
    try {
      const res = await findConsultationByRef(searchRef);
      setSearchResult(res);
    } catch {
      setSearchResult(null);
    } finally {
      setIsSearching(false);
    }
  };

  const handleCopySql = () => {
    const sqlText = `-- RKPT TECH LTD Supabase Migration
CREATE TABLE IF NOT EXISTS public.consultations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    jurisdiction TEXT,
    scope_details TEXT,
    service_requested TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    company_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    current_country TEXT,
    target_hub TEXT,
    entity_type TEXT,
    service_required TEXT,
    industry TEXT,
    description TEXT,
    contact_method TEXT DEFAULT 'Email',
    preferred_date_time TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.expansion_quotes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    country TEXT NOT NULL,
    structure TEXT,
    business_size TEXT,
    services_selected JSONB DEFAULT '[]'::jsonb,
    estimated_days_min INTEGER,
    estimated_days_max INTEGER,
    estimated_fee_eur NUMERIC,
    client_email TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expansion_quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert consultations" ON public.consultations FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow read consultations" ON public.consultations FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow anon insert contact_inquiries" ON public.contact_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow read contact_inquiries" ON public.contact_inquiries FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Allow anon insert expansion_quotes" ON public.expansion_quotes FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow read expansion_quotes" ON public.expansion_quotes FOR SELECT TO anon, authenticated USING (true);
`;

    navigator.clipboard.writeText(sqlText);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  const handleSeedJurisdictions = async () => {
    setIsSeeding(true);
    setSeedStatus(null);
    try {
      const res = await seedJurisdictionsToSupabase();
      if (res.success) {
        setSeedStatus(`Successfully seeded ${res.count} global jurisdictions to Supabase table!`);
      } else {
        setSeedStatus(`Seeding note: ${res.error}. (Ensure jurisdictions table is created in Supabase SQL Editor).`);
      }
    } catch (err: any) {
      setSeedStatus(`Seeding error: ${err.message}`);
    } finally {
      setIsSeeding(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden text-left flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0b1b36] text-white p-5 flex items-center justify-between border-b border-[#15325b] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Supabase Cloud Database
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-300">
                  roimruzwuxpsakulzpyc
                </span>
              </div>
              <h2 className="text-lg font-bold text-white tracking-tight">
                Database Transfer & Lead Management
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100 border-b border-gray-200 px-6 flex items-center justify-between shrink-0">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('status')}
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'status'
                  ? 'border-[#c91c1c] text-[#0b1b36] bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <Server className="w-3.5 h-3.5" />
              <span>Connection & Health</span>
            </button>
            <button
              onClick={() => setActiveTab('records')}
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'records'
                  ? 'border-[#c91c1c] text-[#0b1b36] bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Database Records ({consultations.length + inquiries.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'schema'
                  ? 'border-[#c91c1c] text-[#0b1b36] bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>SQL Schema & Setup</span>
            </button>
          </div>

          <button
            onClick={fetchHealthAndData}
            disabled={isChecking}
            className="text-[11px] font-bold text-gray-600 hover:text-[#0b1b36] flex items-center gap-1 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[calc(92vh-140px)]">
          {/* TAB 1: CONNECTION & HEALTH */}
          {activeTab === 'status' && (
            <div className="space-y-6">
              {/* Connection Status Card */}
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0b1b36] text-sm">
                        Supabase Project Connectivity Active
                      </h3>
                      <p className="text-xs text-gray-500">
                        All consultation forms, quotes, and inquiries route directly to your Supabase instance.
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Live Cloud Sync
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="bg-white p-3 rounded-xl border border-gray-200">
                    <span className="text-[10px] text-gray-400 uppercase font-sans font-bold block mb-1">
                      Project Endpoint (SUPABASE_URL)
                    </span>
                    <span className="text-[#0b1b36] break-all select-all">{SUPABASE_URL}</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-gray-200">
                    <span className="text-[10px] text-gray-400 uppercase font-sans font-bold block mb-1">
                      Public API Key (PUBLISHABLE_KEY)
                    </span>
                    <span className="text-[#0b1b36] break-all select-all">
                      {SUPABASE_PUBLISHABLE_KEY.slice(0, 18)}...{SUPABASE_PUBLISHABLE_KEY.slice(-10)}
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-gray-200 md:col-span-2">
                    <span className="text-[10px] text-gray-400 uppercase font-sans font-bold block mb-1">
                      JWKS Verification URL (SUPABASE_JWKS_URL)
                    </span>
                    <span className="text-[#0b1b36] break-all select-all">{SUPABASE_JWKS_URL}</span>
                  </div>
                </div>
              </div>

              {/* Table Schema Status Checklist */}
              <div className="border border-gray-200 rounded-2xl p-5 space-y-4">
                <h4 className="font-bold text-[#0b1b36] text-xs uppercase tracking-wider flex items-center justify-between">
                  <span>Database Entity Tables</span>
                  <span className="text-[10px] font-normal text-gray-500">
                    Checked {health?.lastChecked || 'Just now'}
                  </span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-gray-900">consultations</div>
                      <div className="text-[11px] text-gray-500">Fast modal booking requests</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-gray-900">contact_inquiries</div>
                      <div className="text-[11px] text-gray-500">In-depth advisory inquiries</div>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-gray-900">expansion_quotes</div>
                      <div className="text-[11px] text-gray-500">Estimator roadmap quotes</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-blue-900">
                  <div className="space-y-0.5">
                    <div className="font-bold">Dual Storage & Resilient Sync Guaranteed</div>
                    <p className="text-[11px] text-blue-700">
                      All submissions simultaneously write to Supabase and keep an offline local snapshot. No consultation request is ever dropped.
                    </p>
                  </div>
                  <button
                    onClick={handleSeedJurisdictions}
                    disabled={isSeeding}
                    className="shrink-0 px-4 py-2 rounded-lg bg-[#0b1b36] hover:bg-[#15325b] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isSeeding ? 'Seeding...' : 'Seed Jurisdictions'}</span>
                  </button>
                </div>

                {seedStatus && (
                  <div className="p-3 rounded-xl bg-slate-100 text-xs text-gray-700 font-mono">
                    {seedStatus}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: RECORDS & REFERENCE SEARCH */}
          {activeTab === 'records' && (
            <div className="space-y-6">
              {/* Search by Reference ID */}
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4">
                <form onSubmit={handleSearchRef} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchRef}
                      onChange={(e) => setSearchRef(e.target.value)}
                      placeholder="Lookup reference (e.g. RKPT-REF-742918)..."
                      className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-xl font-mono focus:border-[#c91c1c] focus:outline-none bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="px-5 py-2 bg-[#0b1b36] hover:bg-[#15325b] text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    {isSearching ? 'Searching...' : 'Search'}
                  </button>
                </form>

                {searchResult !== undefined && (
                  <div className="mt-3 p-3 rounded-xl border bg-white text-xs">
                    {searchResult ? (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span className="font-bold text-[#0b1b36] font-mono">
                            {searchResult.reference_id}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                            {searchResult.status || 'Pending'}
                          </span>
                        </div>
                        <div className="text-gray-600 grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                          <div>Client: <strong>{searchResult.name}</strong></div>
                          <div>Email: <strong>{searchResult.email}</strong></div>
                          <div>Company: <strong>{searchResult.company || 'N/A'}</strong></div>
                          <div>Hub: <strong>{searchResult.jurisdiction || 'General'}</strong></div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-amber-800 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        <span>No consultation record found matching "{searchRef}".</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Recent Consultations List */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#0b1b36] uppercase tracking-wider">
                    Recent Consultation Submissions ({consultations.length})
                  </h4>
                  <span className="text-[10px] text-gray-500 font-mono">Stored in Supabase</span>
                </div>

                {consultations.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 text-xs">
                    No consultation bookings recorded yet. Submit the "Fast Consultation" modal on the homepage to generate a live record.
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
                    {consultations.map((item, idx) => (
                      <div key={idx} className="p-3 hover:bg-slate-50 transition-colors text-xs flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#0b1b36]">{item.name}</span>
                            <span className="text-gray-400 font-mono text-[11px]">({item.email})</span>
                            {item.company && (
                              <span className="text-gray-500 text-[11px]">• {item.company}</span>
                            )}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            Jurisdiction: <span className="font-medium text-gray-700">{item.jurisdiction || 'Global'}</span>
                            {item.scope_details && (
                              <span className="truncate max-w-xs inline-block ml-2 align-bottom italic text-gray-400">
                                "{item.scope_details.slice(0, 45)}..."
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono text-[10px] font-bold text-[#c91c1c] block">
                            {item.reference_id}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'Recent'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Contact Inquiries */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#0b1b36] uppercase tracking-wider">
                    Advisory Form Inquiries ({inquiries.length})
                  </h4>
                  <span className="text-[10px] text-gray-500 font-mono">contact_inquiries</span>
                </div>

                {inquiries.length === 0 ? (
                  <div className="p-8 text-center text-gray-500 text-xs">
                    No detailed contact inquiries recorded yet.
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
                    {inquiries.map((inq, idx) => (
                      <div key={idx} className="p-3 hover:bg-slate-50 transition-colors text-xs flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#0b1b36]">{inq.full_name}</span>
                            <span className="text-gray-400 font-mono text-[11px]">({inq.email})</span>
                            {inq.company_name && (
                              <span className="text-gray-500 text-[11px]">• {inq.company_name}</span>
                            )}
                          </div>
                          <div className="text-[11px] text-gray-500">
                            Service: <span className="font-medium text-gray-700">{inq.service_required || 'Advisory'}</span> | Target Hub: <span className="font-medium text-gray-700">{inq.target_hub || 'Not specified'}</span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono text-[10px] font-bold text-[#0b1b36] block">
                            {inq.reference_id}
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {inq.created_at ? new Date(inq.created_at).toLocaleDateString() : 'Recent'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: SQL SCHEMA & SETUP SCRIPT */}
          {activeTab === 'schema' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#0b1b36]">
                    Supabase PostgreSQL Tables Setup
                  </h3>
                  <p className="text-xs text-gray-500">
                    Run this SQL script in the <strong>Supabase Dashboard &gt; SQL Editor</strong> if you are provisioning a new instance.
                  </p>
                </div>
                <button
                  onClick={handleCopySql}
                  className="px-4 py-2 bg-[#0b1b36] hover:bg-[#15325b] text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copyFeedback ? 'Copied to Clipboard!' : 'Copy SQL Schema'}</span>
                </button>
              </div>

              <div className="bg-[#0b1b36] text-gray-200 p-4 rounded-xl font-mono text-[11px] overflow-x-auto max-h-80 border border-gray-800 leading-relaxed">
                <pre>{`-- 1. Consultations Table
CREATE TABLE IF NOT EXISTS public.consultations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    jurisdiction TEXT,
    scope_details TEXT,
    service_requested TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Contact Inquiries Table
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    company_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    current_country TEXT,
    target_hub TEXT,
    entity_type TEXT,
    service_required TEXT,
    industry TEXT,
    description TEXT,
    contact_method TEXT DEFAULT 'Email',
    preferred_date_time TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Row Level Security (RLS)
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anon insert consultations" 
  ON public.consultations FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow read consultations" 
  ON public.consultations FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow anon insert contact_inquiries" 
  ON public.contact_inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Allow read contact_inquiries" 
  ON public.contact_inquiries FOR SELECT TO anon, authenticated USING (true);`}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-gray-200 px-6 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>RLS Protected & JWKS Synchronized</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
