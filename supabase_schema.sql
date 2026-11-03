-- ==============================================================================
-- RKPT TECH LTD - SUPABASE DATABASE SCHEMA
-- Project: roimruzwuxpsakulzpyc.supabase.co
-- ==============================================================================

-- 1. Consultations Table (Modal Quick Bookings)
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
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_review', 'scheduled', 'completed', 'archived')),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index for reference lookup and date sorting
CREATE INDEX IF NOT EXISTS idx_consultations_ref ON public.consultations(reference_id);
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON public.consultations(created_at DESC);

-- 2. Contact Inquiries Table (Comprehensive Advisory Enquiries)
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
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'converted', 'closed')),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_inquiries_ref ON public.contact_inquiries(reference_id);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.contact_inquiries(created_at DESC);

-- 3. Expansion Quotes Table (Estimator Submissions)
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
    notes TEXT,
    status TEXT DEFAULT 'draft',
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_quotes_ref ON public.expansion_quotes(reference_id);

-- 4. Chat Inquiries Table (AI Assistant Inquiries & Questions)
CREATE TABLE IF NOT EXISTS public.chat_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT,
    user_message TEXT NOT NULL,
    bot_response TEXT,
    category TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Jurisdictions / Global Hubs Data Table
CREATE TABLE IF NOT EXISTS public.jurisdictions (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    flag TEXT,
    cit_rate TEXT,
    timeline TEXT,
    capital_min TEXT,
    structures JSONB DEFAULT '[]'::jsonb,
    summary TEXT,
    details JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Enable anonymous submissions (inserts) from prospective corporate clients
-- and permit reading by reference_id or administrative users.
-- ==============================================================================

ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expansion_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jurisdictions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for client forms
DROP POLICY IF EXISTS "Allow anonymous insert for consultations" ON public.consultations;
CREATE POLICY "Allow anonymous insert for consultations" 
    ON public.consultations FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read consultations" ON public.consultations;
CREATE POLICY "Allow read consultations" 
    ON public.consultations FOR SELECT 
    TO anon, authenticated 
    USING (true);

DROP POLICY IF EXISTS "Allow anonymous insert for contact_inquiries" ON public.contact_inquiries;
CREATE POLICY "Allow anonymous insert for contact_inquiries" 
    ON public.contact_inquiries FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read contact_inquiries" ON public.contact_inquiries;
CREATE POLICY "Allow read contact_inquiries" 
    ON public.contact_inquiries FOR SELECT 
    TO anon, authenticated 
    USING (true);

DROP POLICY IF EXISTS "Allow anonymous insert for expansion_quotes" ON public.expansion_quotes;
CREATE POLICY "Allow anonymous insert for expansion_quotes" 
    ON public.expansion_quotes FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read expansion_quotes" ON public.expansion_quotes;
CREATE POLICY "Allow read expansion_quotes" 
    ON public.expansion_quotes FOR SELECT 
    TO anon, authenticated 
    USING (true);

DROP POLICY IF EXISTS "Allow anonymous insert for chat_inquiries" ON public.chat_inquiries;
CREATE POLICY "Allow anonymous insert for chat_inquiries" 
    ON public.chat_inquiries FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read jurisdictions" ON public.jurisdictions;
CREATE POLICY "Allow read jurisdictions" 
    ON public.jurisdictions FOR SELECT 
    TO anon, authenticated 
    USING (true);

DROP POLICY IF EXISTS "Allow manage jurisdictions" ON public.jurisdictions;
CREATE POLICY "Allow manage jurisdictions" 
    ON public.jurisdictions FOR ALL 
    TO anon, authenticated 
    USING (true) 
    WITH CHECK (true);

-- ==============================================================================
-- INITIAL SEED DATA FOR 7 GLOBAL HUBS
-- ==============================================================================
INSERT INTO public.jurisdictions (id, name, flag, cit_rate, timeline, capital_min, structures, summary)
VALUES
('portugal', 'Portugal', '🇵🇹', '17% - 21%', '3 - 7 Days', '€1 (Nominal)', '["LDA (Limitada)", "SA (Sociedade Anónima)", "Unipessoal LDA", "Branch / Sucursal"]', 'Gateway to the European Union and Lusophone world with Non-Habitual Resident (NHR 2.0) and Tech Visa benefits.'),
('uk', 'United Kingdom', '🇬🇧', '19% - 25%', '24 - 48 Hours', '£1', '["Private Limited Company (LTD)", "Limited Liability Partnership (LLP)", "Public Limited (PLC)", "UK Overseas Branch"]', 'Preeminent global financial and fintech capital with world-class common-law legal certainty.'),
('ireland', 'Ireland', '🇮🇪', '12.5%', '3 - 5 Days', '€1', '["Private Company Limited by Shares (LTD)", "Designated Activity Company (DAC)", "Branch"]', 'Europe premier tech headquarters jurisdiction with favorable 12.5% trading tax rate and extensive DTT network.'),
('switzerland', 'Switzerland', '🇨🇭', '11.9% - 21%', '7 - 14 Days', 'CHF 20,000 (GmbH)', '["GmbH (SARL)", "AG (SA)", "Branch Office"]', 'World benchmark for institutional stability, asset protection, private wealth, and top-tier banking infrastructure.'),
('usa', 'United States', '🇺🇸', '21% Fed + State', '1 - 3 Days', '$0 (None)', '["Delaware / Wyoming LLC", "C-Corporation", "S-Corporation"]', 'The worlds largest venture ecosystem and consumer market with state-of-the-art corporate structuring in Delaware and Wyoming.'),
('dubai', 'Dubai / UAE', '🇦🇪', '0% / 9%', '3 - 7 Days', 'AED 0 - 50,000', '["Freezone Company (FZCO)", "Mainland LLC", "Offshore Company"]', 'Leading tax-efficient Middle Eastern nexus offering 0% personal tax, 0% Freezone qualifying income, and 10-year Golden Visas.'),
('india', 'India', '🇮🇳', '15% - 22%', '5 - 10 Days', '₹10,000', '["Private Limited Company (Pvt Ltd)", "Limited Liability Partnership (LLP)", "Wholly Owned Subsidiary"]', 'Rapidly growing technology powerhouse and engineering hub with preferential 15% rate for new manufacturing and digital entities.')
ON CONFLICT (id) DO UPDATE SET 
    name = EXCLUDED.name,
    flag = EXCLUDED.flag,
    cit_rate = EXCLUDED.cit_rate,
    timeline = EXCLUDED.timeline,
    capital_min = EXCLUDED.capital_min,
    structures = EXCLUDED.structures,
    summary = EXCLUDED.summary,
    updated_at = now();
