import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { sound } from '../utils/audio';

interface SREService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  technologies: string[];
}

const sreServices: SREService[] = [
  {
    id: 'prod-ops',
    title: 'Production Infrastructure & IIS Operations',
    tagline: 'High-availability web tiers and robust runtime configuration.',
    description:
      'Lifecycle management for monolithic and distributed application tiers. Specialized in IIS 10, ASP.NET, worker process limits, and proactive recycling to ensure non-stop availability.',
    deliverables: [
      'IIS 10 & application pool lifecycle tuning',
      'Windows Server & Linux system hardening',
      'VAPT security findings remediation',
      'Worker process thread monitoring & stability',
    ],
    timeline: 'Ongoing / Sprints',
    technologies: ['IIS 10', 'Windows Server', 'ASP.NET', 'PowerShell'],
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipelines & Release Automation',
    tagline: 'Zero-downtime release promotion and artifact management.',
    description:
      'Standardized automated deployment workflows promoting code from repositories to staging and production with pre-flight sanity checks and rollback automation.',
    deliverables: [
      'Azure DevOps & TFS pipeline architecture',
      'Immutable build artifact versioning',
      'Linux automated systemd deployment scripts',
      'Post-deployment automated health probes',
    ],
    timeline: '1 - 2 Weeks',
    technologies: ['Azure DevOps', 'TFS', 'Bash', 'Docker Compose', 'CI/CD'],
  },
  {
    id: 'observability',
    title: 'Observability, Prometheus & Grafana',
    tagline: 'Full-stack host and application telemetry with actionable alerts.',
    description:
      'Eliminate operational blind spots across heterogeneous server fleets. Centralized dashboards, node/windows exporters, and fine-tuned PromQL threshold alerts.',
    deliverables: [
      'Prometheus exporter deployment (Linux & Windows)',
      'Custom PromQL queries & resource threshold alerts',
      'Centralized real-time Grafana dashboards',
      'Alert fatigue elimination & triage runbooks',
    ],
    timeline: '1 - 3 Weeks',
    technologies: ['Prometheus', 'Grafana', 'node_exporter', 'windows_exporter', 'PromQL'],
  },
  {
    id: 'dr',
    title: 'Disaster Recovery & Failover Auditing',
    tagline: 'Enterprise business continuity drills with zero deviations.',
    description:
      'Plan, execute, and document comprehensive Disaster Recovery simulations across AWS, GCP, and on-premises datacenters, confirming strict RTO and RPO benchmarks.',
    deliverables: [
      'Multi-cloud DR scenario simulation drills',
      'DNS failover & replication validation',
      'Runbook authoring & verification audits',
      'Stakeholder compliance reporting (0 deviations)',
    ],
    timeline: '2 - 4 Weeks',
    technologies: ['AWS', 'GCP', 'PowerShell', 'DNS', 'Replication'],
  },
  {
    id: 'automation',
    title: 'Operational Scripting & Cloud Automation',
    tagline: 'Replace repetitive manual tasks with bulletproof scripts.',
    description:
      'Custom administrative automation utilities in PowerShell and Bash. Automated cloud inventory discovery, recurring log retention, and health auditing.',
    deliverables: [
      'AWS CLI & Cron recurring resource trackers',
      'Administrative PowerShell configuration scripts',
      'Automated log rotation & disk space reclamation',
      'Scheduled health check scripts with email alerts',
    ],
    timeline: '1 - 2 Weeks',
    technologies: ['PowerShell', 'Bash', 'AWS CLI', 'Linux Cron'],
  },
  {
    id: 'rca',
    title: 'Incident Triage & Root Cause Analysis',
    tagline: 'Rapid issue diagnosis to permanently resolve system bottlenecks.',
    description:
      'Deep diagnostic analysis of HTTP 4xx/5xx errors, WAF/ModSecurity blocks, database connection exhaustion, and memory leaks to prevent recurrence.',
    deliverables: [
      'HTTP sub-status and IIS W3C log forensics',
      'Nginx reverse proxy & SSL/TLS debugging',
      'Database connection & thread bottleneck analysis',
      'Comprehensive post-mortem RCA documentation',
    ],
    timeline: 'Rapid Response',
    technologies: ['Log Analysis', 'Nginx', 'WAF', 'SQL Server', 'RCA'],
  },
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(sreServices[0].id);

  const handleInquire = (serviceTitle: string) => {
    sound.playSelect();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('select-project-type', { detail: serviceTitle }));
    }
  };

  return (
    <section id="services" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                SRE & DEVOPS EXPERTISE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              SRE & infrastructure <span className="italic font-normal text-[#e6c875]">solutions.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 06 / CAPABILITIES ]
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sreServices.map((service, idx) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveService(service.id)}
              className={`glass-panel p-8 rounded-3xl border transition-all duration-400 flex flex-col justify-between group ${
                activeService === service.id
                  ? 'border-[#e6c875]/50 bg-white/[0.03] shadow-xl'
                  : 'border-white/[0.07] hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                  <span className="font-mono text-xs text-[#e6c875] font-semibold">
                    0{idx + 1} //
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#a1a1aa]">
                    <Clock size={12} />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-editorial-serif text-[#f5f5f7] mb-2 group-hover:text-[#e6c875] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-[#e6c875]/90 mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                      <CheckCircle2 size={13} className="text-[#e6c875] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                  {service.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#a1a1aa]">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleInquire(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider font-semibold text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
