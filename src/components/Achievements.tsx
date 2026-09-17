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
    description: 'Executed 10+ Disaster Recovery drills across enterprise fintech and SaaS platforms with zero critical deviations during recovery validation.',
  },
  {
    id: 'prod-eng',
    title: 'Mission-Critical Production Engineering',
    category: 'Production Operations',
    year: '2023 - Present',
    metric: '99.99% Availability',
    description: 'Maintained monolithic ASP.NET and distributed systems on IIS 10, Windows Server, and Linux with proactive pool recycling.',
  },
  {
    id: 'observability-arch',
    title: 'Prometheus & Grafana Telemetry Stack',
    category: 'Observability',
    year: '2024 - 2026',
    metric: 'Full Fleet Visibility',
    description: 'Architected exporter-based metrics collection across Linux and Windows with custom PromQL queries and real-time alerts.',
  },
  {
    id: 'cloud-infra',
    title: 'Multi-Cloud Regional Operations',
    category: 'Cloud Infrastructure',
    year: '2024 - 2026',
    metric: 'AWS & GCP Regional Hosts',
    description: 'Administered compute instances, VPC networking, security groups, and cloud environments across AWS and GCP.',
  },
  {
    id: 'scripting-automation',
    title: 'Operational Scripting & Automation',
    category: 'DevOps Automation',
    year: '2023 - 2026',
    metric: '70% Manual Toil Reduced',
    description: 'Authored administrative automation suites in PowerShell and Bash for recurring audits, inventory discovery, and log cleanup.',
  },
  {
    id: 'web-sec',
    title: 'Nginx Reverse Proxy & WAF Security',
    category: 'Security & Traffic',
    year: '2024 - 2026',
    metric: 'TLS 1.3 / ModSecurity',
    description: 'Engineered edge ingress routing, SSL/TLS termination, and web application firewall policies protecting internal web services.',
  },
  {
    id: 'release-mgmt',
    title: 'CI/CD Release Promotion & Verification',
    category: 'Release Engineering',
    year: '2024 - Present',
    metric: 'Automated Sanity Probes',
    description: 'Orchestrated build artifact promotions through Azure DevOps and TFS pipelines with post-deployment sanity validation.',
  },
  {
    id: 'incident-rca',
    title: 'Structured Incident Response & RCA',
    category: 'Reliability',
    year: '2023 - Present',
    metric: 'Zero Recurrence Rate',
    description: 'Diagnosed high-severity HTTP 4xx/5xx errors, application exceptions, and SQL Server connectivity bottlenecks.',
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
