import React from 'react';

interface SREHighlight {
  id: string;
  title: string;
  category: string;
  year: string;
  metric: string;
  description: string;
}

const sreHighlights: SREHighlight[] = [
  {
    id: 'dr-record',
    title: 'Disaster Recovery Enterprise Drills',
    category: 'Business Continuity',
    year: '2024 - Present',
    metric: '10+ Drills / 0 Deviations',
    description: 'Participated in and validated 10+ Disaster Recovery drills across enterprise SaaS and fintech platforms with zero critical deviations during recovery validation.',
  },
  {
    id: 'uat-live-movement',
    title: 'Client Environment Onboarding & Movement',
    category: 'Release & Delivery',
    year: '2024 - Present',
    metric: 'APAC & SPBD Onboarding',
    description: 'Coordinated and executed UAT to LIVE environment movement, release promotion, and production deployment validation for major regional client setups.',
  },
  {
    id: 'iis-prod-ops',
    title: 'IIS 10 & .NET Production Web Tier',
    category: 'Production Operations',
    year: '2023 - Present',
    metric: 'IIS 10 & Windows Server',
    description: 'Maintained monolithic ASP.NET platforms on IIS 10, tuning application pool recycling, worker process limits, and Nginx reverse proxy load balancing.',
  },
  {
    id: 'observability-arch',
    title: 'Prometheus & Grafana Telemetry Fleet',
    category: 'Observability & Monitoring',
    year: '2024 - 2026',
    metric: 'windows & node_exporter',
    description: 'Engineered exporter-based metrics collection across heterogeneous Windows and Linux hosts with customized PromQL queries and real-time alerts.',
  },
  {
    id: 'cloud-infra',
    title: 'Multi-Cloud Infrastructure Operations',
    category: 'Cloud Infrastructure',
    year: '2023 - 2026',
    metric: 'AWS & GCP Regional Hosts',
    description: 'Administered compute instances, VPC networking, security groups, and cloud storage across AWS and GCP enterprise environments.',
  },
  {
    id: 'scripting-automation',
    title: 'Operational Scripting & Automation Suites',
    category: 'DevOps Automation',
    year: '2023 - 2026',
    metric: 'PowerShell, Bash & Batch',
    description: 'Authored administrative automation suites in PowerShell and Bash for pre-deployment checks, configuration audits, and cloud discovery.',
  },
  {
    id: 'vapt-remediation',
    title: 'VAPT Security Remediation & Hardening',
    category: 'Security & Compliance',
    year: '2024 - 2026',
    metric: 'HSTS, CSP & WAF Guard',
    description: 'Remediated vulnerability assessment findings by implementing HSTS, Content-Security-Policy, and Permissions Policy security headers across web tiers.',
  },
  {
    id: 'incident-rca',
    title: 'Structured Incident Investigation & RCA',
    category: 'Reliability Engineering',
    year: '2023 - Present',
    metric: 'Root Cause Remediation',
    description: 'Diagnosed high-severity HTTP 4xx/5xx errors, application exceptions, and SQL Server connectivity bottlenecks to permanently prevent recurrence.',
  },
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-28 md:py-36 px-6 md:px-12 bg-[#070709] border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6c875]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#e6c875] uppercase">
                OPERATIONAL HONORS & RECOGNITION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-editorial-serif font-light text-[#f5f5f7]">
              Proven <span className="italic font-normal text-[#e6c875]">track record.</span>
            </h2>
          </div>
          <p className="font-mono text-xs text-[#a1a1aa] tracking-widest uppercase">
            [ 08 / ACHIEVEMENTS ]
          </p>
        </div>

        {/* Editorial Table / List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {sreHighlights.map((item, idx) => (
            <div
              key={item.id}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center group hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-2xl"
            >
              {/* Index & Year */}
              <div className="md:col-span-2 flex items-center gap-3">
                <span className="font-mono text-xs text-[#e6c875] font-semibold">
                  0{idx + 1}
                </span>
                <span className="text-xs font-mono text-[#a1a1aa]">
                  {item.year}
                </span>
              </div>

              {/* Title & Category */}
              <div className="md:col-span-5">
                <h3 className="text-xl sm:text-2xl font-editorial-serif text-[#f5f5f7] group-hover:text-[#e6c875] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#a1a1aa] mt-1">
                  Domain: {item.category}
                </p>
              </div>

              {/* Metric & Description */}
              <div className="md:col-span-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-[#a1a1aa] leading-relaxed max-w-sm font-light">
                  {item.description}
                </p>
                {item.metric && (
                  <span className="self-start sm:self-auto shrink-0 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-[#e6c875] font-semibold">
                    {item.metric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
