import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { 
  Monitor, 
  Cpu, 
  Code, 
  Globe, 
  Database, 
  Cloud, 
  Repeat, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const technologyCapabilities = [
  {
    id: 'it-support',
    title: 'IT Support & Managed IT',
    icon: Monitor,
    desc: 'Business IT support, user and device support, Microsoft/cloud environment support, systems support and ongoing technical maintenance.'
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    icon: Cpu,
    desc: 'AI readiness assessment, workflow integration, productivity solutions, document and knowledge automation, and customer-service AI, monitored and improved on an ongoing basis.'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    icon: Code,
    desc: 'Custom business software, web and mobile applications, business platforms, secure authentication, API integrations, and cloud or on-premise deployment.'
  },
  {
    id: 'website-digital',
    title: 'Website & Digital Solutions',
    icon: Globe,
    desc: 'Corporate websites, business landing pages, multilingual and GDPR-aware design, SEO-ready architecture, and ongoing maintenance and support.'
  },
  {
    id: 'erp-crm',
    title: 'ERP & CRM Solutions',
    icon: Database,
    desc: 'Custom ERP systems, CRM integration, accounting and finance integration, HR and payroll systems, and supply-chain and inventory systems.'
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    icon: Cloud,
    desc: 'Cloud setup and migration, business productivity environments, infrastructure support, backup and recovery, and access and identity management.'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    icon: Repeat,
    desc: 'Workflow automation, approval processes, document automation, CRM/ERP workflows, reporting automation and integration between business systems.'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: ShieldCheck,
    desc: 'Security assessment, endpoint and network protection, identity and access controls, backup and recovery planning, monitoring and incident-response coordination.'
  }
];

interface TechnologySectionProps {
  onOpenConsultation: (preselectedService?: string) => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 border-b border-gray-200">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#3273a8] block mb-1">
                Technology Solutions
              </span>
              <h2 className="text-3xl font-display font-black text-[#15325b] uppercase tracking-tight">
                Core Technology Capabilities
              </h2>
              <p className="mt-2 text-sm text-gray-600 max-w-2xl">
                Technology should make your business easier to operate, more secure and more scalable. We design practical digital solutions around your business requirements.
              </p>
            </div>
            <button
              onClick={() => onOpenConsultation('Technology Requirements')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c91c1c] hover:text-[#a01616] transition-colors shrink-0 group self-start md:self-auto"
            >
              <span>Tell us what you need</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {technologyCapabilities.map((tech) => {
              const IconComp = tech.icon;
              return (
                <div
                  key={tech.id}
                  className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-[#0b1b36]">
                      <IconComp className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#15325b] mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-light mb-4">
                        {tech.desc}
                      </p>
                      <button 
                        onClick={() => onOpenConsultation(tech.title)}
                        className="text-xs font-bold text-[#c91c1c] hover:text-[#a01616] transition-colors uppercase tracking-wider flex items-center gap-1 group"
                      >
                        VIEW SPECIFICATIONS
                        <span className="text-lg leading-none">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
