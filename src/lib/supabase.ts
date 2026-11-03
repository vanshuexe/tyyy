import { createClient } from '@supabase/supabase-js';
import { COUNTRIES_DATA } from '../data/companyData';

// User-provided credentials as direct defaults + environment variable overrides
export const SUPABASE_URL = 
  import.meta.env.VITE_SUPABASE_URL || 
  'https://roimruzwuxpsakulzpyc.supabase.co';

export const SUPABASE_PUBLISHABLE_KEY = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
  'sb_publishable_8MmTD-eau9LMYHw5t2W0rA_tWTu7l_D';

export const SUPABASE_JWKS_URL = 
  'https://roimruzwuxpsakulzpyc.supabase.co/auth/v1/.well-known/jwks.json';

// Initialize Supabase Client
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// TypeScript interfaces for database records
export interface ConsultationRecord {
  id?: string;
  reference_id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  jurisdiction?: string;
  scope_details?: string;
  service_requested?: string;
  status?: 'pending' | 'in_review' | 'scheduled' | 'completed' | 'archived';
  created_at?: string;
}

export interface ContactInquiryRecord {
  id?: string;
  reference_id: string;
  full_name: string;
  company_name?: string;
  email: string;
  phone?: string;
  current_country?: string;
  target_hub?: string;
  entity_type?: string;
  service_required?: string;
  industry?: string;
  description?: string;
  contact_method?: string;
  preferred_date_time?: string;
  status?: 'new' | 'contacted' | 'in_progress' | 'converted' | 'closed';
  created_at?: string;
}

export interface ExpansionQuoteRecord {
  id?: string;
  reference_id: string;
  country: string;
  structure?: string;
  business_size?: string;
  services_selected?: string[];
  estimated_days_min?: number;
  estimated_days_max?: number;
  estimated_fee_eur?: number;
  client_email?: string;
  notes?: string;
  status?: string;
  created_at?: string;
}

export interface ChatInquiryRecord {
  id?: string;
  session_id?: string;
  user_message: string;
  bot_response?: string;
  category?: string;
  created_at?: string;
}

export interface DbConnectionHealth {
  connected: boolean;
  url: string;
  hasConsultationsTable: boolean;
  hasInquiriesTable: boolean;
  errorMessage?: string;
  lastChecked: string;
}

// Local Storage Fallback Keys
const LOCAL_STORAGE_CONSULTATIONS = 'rkpt_supabase_consultations_cache';
const LOCAL_STORAGE_INQUIRIES = 'rkpt_supabase_inquiries_cache';
const LOCAL_STORAGE_QUOTES = 'rkpt_supabase_quotes_cache';

// Helper to get local cache
function getLocalCache<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Helper to append to local cache
function appendLocalCache<T>(key: string, item: T) {
  try {
    const list = getLocalCache<T>(key);
    list.unshift(item);
    localStorage.setItem(key, JSON.stringify(list.slice(0, 50)));
  } catch (e) {
    console.warn('Local storage write error:', e);
  }
}

/**
 * Health check: tests connectivity to Supabase project
 */
export async function checkSupabaseHealth(): Promise<DbConnectionHealth> {
  const result: DbConnectionHealth = {
    connected: false,
    url: SUPABASE_URL,
    hasConsultationsTable: false,
    hasInquiriesTable: false,
    lastChecked: new Date().toLocaleTimeString(),
  };

  try {
    // 1. Test consultations table
    const { data: cData, error: cErr } = await supabase
      .from('consultations')
      .select('id')
      .limit(1);

    if (!cErr) {
      result.connected = true;
      result.hasConsultationsTable = true;
    } else if (cErr.code === 'PGRST205') {
      // Endpoint reached, table not created yet
      result.connected = true;
      result.hasConsultationsTable = false;
      result.errorMessage = "Connected to Supabase! The SQL table 'consultations' needs to be created in your Supabase SQL Editor.";
    } else {
      result.errorMessage = cErr.message;
    }

    // 2. Test inquiries table
    const { error: iErr } = await supabase
      .from('contact_inquiries')
      .select('id')
      .limit(1);

    if (!iErr) {
      result.hasInquiriesTable = true;
    }
  } catch (err: any) {
    result.connected = false;
    result.errorMessage = err.message || 'Network error reaching Supabase';
  }

  return result;
}

/**
 * Save Consultation Booking (from Modal or Quick Actions)
 */
export async function saveConsultationToSupabase(record: ConsultationRecord): Promise<{
  success: boolean;
  persistedTo: 'supabase' | 'local_fallback';
  referenceId: string;
  error?: string;
}> {
  const fullRecord: ConsultationRecord = {
    ...record,
    status: record.status || 'pending',
    created_at: new Date().toISOString(),
  };

  // Always save locally as immediate safety backup
  appendLocalCache(LOCAL_STORAGE_CONSULTATIONS, fullRecord);

  try {
    const { error } = await supabase
      .from('consultations')
      .insert([fullRecord]);

    if (!error) {
      return {
        success: true,
        persistedTo: 'supabase',
        referenceId: fullRecord.reference_id,
      };
    }

    console.warn('Supabase insert warning (fallback used):', error.message);
    return {
      success: true,
      persistedTo: 'local_fallback',
      referenceId: fullRecord.reference_id,
      error: error.message,
    };
  } catch (err: any) {
    return {
      success: true,
      persistedTo: 'local_fallback',
      referenceId: fullRecord.reference_id,
      error: err.message,
    };
  }
}

/**
 * Save Contact Advisory Inquiry
 */
export async function saveContactInquiryToSupabase(record: ContactInquiryRecord): Promise<{
  success: boolean;
  persistedTo: 'supabase' | 'local_fallback';
  referenceId: string;
  error?: string;
}> {
  const fullRecord: ContactInquiryRecord = {
    ...record,
    status: record.status || 'new',
    created_at: new Date().toISOString(),
  };

  appendLocalCache(LOCAL_STORAGE_INQUIRIES, fullRecord);

  try {
    const { error } = await supabase
      .from('contact_inquiries')
      .insert([fullRecord]);

    if (!error) {
      return {
        success: true,
        persistedTo: 'supabase',
        referenceId: fullRecord.reference_id,
      };
    }

    console.warn('Supabase inquiry insert warning:', error.message);
    return {
      success: true,
      persistedTo: 'local_fallback',
      referenceId: fullRecord.reference_id,
      error: error.message,
    };
  } catch (err: any) {
    return {
      success: true,
      persistedTo: 'local_fallback',
      referenceId: fullRecord.reference_id,
      error: err.message,
    };
  }
}

/**
 * Save Expansion Scope Quote
 */
export async function saveExpansionQuoteToSupabase(record: ExpansionQuoteRecord): Promise<{
  success: boolean;
  persistedTo: 'supabase' | 'local_fallback';
  referenceId: string;
  error?: string;
}> {
  const fullRecord: ExpansionQuoteRecord = {
    ...record,
    created_at: new Date().toISOString(),
  };

  appendLocalCache(LOCAL_STORAGE_QUOTES, fullRecord);

  try {
    const { error } = await supabase
      .from('expansion_quotes')
      .insert([fullRecord]);

    if (!error) {
      return {
        success: true,
        persistedTo: 'supabase',
        referenceId: fullRecord.reference_id,
      };
    }

    return {
      success: true,
      persistedTo: 'local_fallback',
      referenceId: fullRecord.reference_id,
      error: error.message,
    };
  } catch (err: any) {
    return {
      success: true,
      persistedTo: 'local_fallback',
      referenceId: fullRecord.reference_id,
      error: err.message,
    };
  }
}

/**
 * Save Chatbot Inquiries
 */
export async function saveChatInquiryToSupabase(record: ChatInquiryRecord): Promise<void> {
  try {
    await supabase.from('chat_inquiries').insert([{
      ...record,
      created_at: new Date().toISOString(),
    }]);
  } catch (e) {
    // Non-blocking chat telemetry
  }
}

/**
 * Query consultation by reference ID (checks Supabase first, then local cache)
 */
export async function findConsultationByRef(refId: string): Promise<ConsultationRecord | null> {
  const cleanRef = refId.trim().toUpperCase();
  try {
    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .eq('reference_id', cleanRef)
      .maybeSingle();

    if (!error && data) {
      return data as ConsultationRecord;
    }
  } catch {
    // fallback
  }

  // Check local cache
  const cached = getLocalCache<ConsultationRecord>(LOCAL_STORAGE_CONSULTATIONS);
  return cached.find((c) => c.reference_id.toUpperCase() === cleanRef) || null;
}

/**
 * Get all recent consultations (merged from Supabase and local cache)
 */
export async function getRecentSubmissions(): Promise<{
  consultations: ConsultationRecord[];
  inquiries: ContactInquiryRecord[];
}> {
  let consultations: ConsultationRecord[] = [];
  let inquiries: ContactInquiryRecord[] = [];

  try {
    const { data: cData } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);
    if (cData && cData.length > 0) {
      consultations = cData;
    }
  } catch {
    // fallback
  }

  try {
    const { data: iData } = await supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10);
    if (iData && iData.length > 0) {
      inquiries = iData;
    }
  } catch {
    // fallback
  }

  // Merge with local storage if remote had no records
  if (consultations.length === 0) {
    consultations = getLocalCache<ConsultationRecord>(LOCAL_STORAGE_CONSULTATIONS);
  }
  if (inquiries.length === 0) {
    inquiries = getLocalCache<ContactInquiryRecord>(LOCAL_STORAGE_INQUIRIES);
  }

  return { consultations, inquiries };
}

/**
 * Seed 7 jurisdictions into Supabase
 */
export async function seedJurisdictionsToSupabase(): Promise<{
  success: boolean;
  count: number;
  error?: string;
}> {
  try {
    const records = COUNTRIES_DATA.map((c) => ({
      id: c.id,
      name: c.name,
      flag: c.flag,
      cit_rate: c.corporateTaxRate,
      timeline: c.formationTime,
      capital_min: c.capital,
      structures: c.structures,
      summary: c.summary,
      details: {
        currency: c.currency,
        regionalFocus: c.regionalFocus,
        keyAdvantages: c.keyAdvantages,
      },
      updated_at: new Date().toISOString(),
    }));

    const { error } = await supabase
      .from('jurisdictions')
      .upsert(records, { onConflict: 'id' });

    if (error) {
      return { success: false, count: 0, error: error.message };
    }

    return { success: true, count: records.length };
  } catch (err: any) {
    return { success: false, count: 0, error: err.message };
  }
}
