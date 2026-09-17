export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  businessProblem: string;
  engineeringSolution: string;
  implementation: string;
  operationalOutcome: string;
  technologiesUsed: string[];
  lessonsLearned: string;
  github: string;
  liveDemo: string;
  diagramId: string;
  image?: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  details: string;
}

export interface ArchitectureBlueprint {
  id: string;
  title: string;
  type: string;
  tag: string;
  flowSummary: string;
  purpose: string;
  description: string;
  technologies: string[];
  responsibilities: string;
  operationalNotes: string;
  nodes: ArchitectureNode[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
  businessImpact: string;
}

export interface SkillGroup {
  title: string;
  domainLens: string;
  description: string;
  technologies: string[];
}

export const personalInfo = {
  name: "Sudharsan",
  brandMonogram: "SUDHARSAN",
  designation: "DevOps Engineer | Site Reliability Engineer | Cloud Engineer",
  summary: "Building reliable infrastructure, automating operational workflows, and supporting production systems across cloud, Linux, Windows, and application platforms.",
  bio: "With 3+ years of experience across IT, infrastructure, and application operations, I focus on DevOps, Site Reliability Engineering, and Cloud infrastructure. My background spans supporting business-critical applications in enterprise and SaaS environments, administering Windows and Linux systems, automating deployments, and maintaining high availability across cloud and on-premises platforms.",
  aboutMe: "I operate across the entire application lifecycle from DEV and QA to UAT, Pre-Production, and PROD. My work involves IIS and .NET environments, containerized microservices, Nginx reverse proxying, Prometheus/Grafana observability, Azure DevOps/TFS release automation, and cloud infrastructure across AWS and GCP. I believe in repeatable deployments, proactive monitoring, structured incident triage, and continuous reliability.",
  yearsOfExperience: 3,
  industryExpertise: "Fintech, SaaS, Multi-Cloud & Enterprise Infrastructure",
  avatarUrl: "/hero-sudharsan.jpg",
  metrics: [
    { label: "Production SLA Target", value: "99.99%", sub: "High-Availability Fintech Platforms" },
    { label: "Disaster Recovery Drills", value: "10+", sub: "Multi-Cloud Enterprise Validations" },
    { label: "Critical DR Deviations", value: "0", sub: "100% Recovery Compliance Record" },
    { label: "Hands-on Operations", value: "3+ Yrs", sub: "Enterprise & SaaS Environments" },
  ],
  socialLinks: {
    linkedin: "https://linkedin.com/in/sudharsan-sre/",
    github: "https://github.com/raghav-sudharsan",
    whatsapp: "https://wa.me/917904025466",
    email: "raghavsudhar07@gmail.com",
    location: "Bangalore, Karnataka, India"
  }
};

export const projectsData: ProjectItem[] = [
  {
    id: "integration-platform",
    name: "Integration Platform",
    subtitle: "Service Integration, Ingress Routing & Container Runtime Operations",
    category: "Containerization & Integration Operations",
    description: "Engineered deployment and runtime operations for a containerized integration platform consisting of a React frontend and Go microservices running on Linux.",
    businessProblem: "Deploying multi-service integration components across varying environments caused runtime inconsistencies, CORS issues, and service discovery routing errors.",
    engineeringSolution: "Implemented Docker Compose for multi-service application orchestration, configured Nginx reverse proxy with HTTPS routing and SSL/TLS termination, and leveraged Consul for service discovery and Redis for caching.",
    implementation: "Managed container networking, environment configuration, and service lifecycle. Configured Nginx reverse proxy and HTTPS for frontend and API routing. Troubleshot service dependencies, database connectivity, SSL/TLS, CORS, HTTP 4xx/5xx responses, and container logs.",
    operationalOutcome: "Standardized multi-service container deployments across Linux hosts, ensuring reliable service communication, secure external access, and streamlined operational troubleshooting.",
    technologiesUsed: ["React", "Vite", "Go", "Docker", "Nginx", "Consul", "Redis", "SQL Server", "Azure DevOps", "Linux"],
    lessonsLearned: "Defining clear container network bridges, consolidating ingress through an Nginx reverse proxy, and using service discovery simplifies service lifecycle management and cross-service debugging.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "integration-platform",
    image: "/projects/project-1.svg"
  },
  {
    id: "dotnet-iis",
    name: ".NET Application Management & IIS",
    subtitle: "Production IIS 10 Web Tier & Monolithic .NET Application Operations",
    category: "Application Infrastructure & Web Tier",
    description: "Engineered high-availability application hosting and web-tier operations for monolithic ASP.NET / .NET Framework applications running on Windows Server.",
    businessProblem: "High-volume transactional fintech applications suffered from worker process thread saturation, unhandled runtime exceptions, and security header non-compliance.",
    engineeringSolution: "Engineered high-availability IIS 10 web tier with tuned application pool recycling, Nginx reverse proxy load balancing, and VAPT security hardening.",
    implementation: "Configured dedicated application pools, tuned worker limits and recycling triggers, enforced HSTS, CSP, and Permissions Policy security headers, resolved SQL Server connection pool exhaustion, and performed production log diagnostics.",
    operationalOutcome: "Delivered high application stability under peak loads, eliminated worker thread deadlocks, and achieved full VAPT security compliance.",
    technologiesUsed: ["ASP.NET", ".NET Framework", "IIS 10", "Windows Server", "Nginx", "SQL Server", "VAPT", "PowerShell"],
    lessonsLearned: "Proactive recycling limit tuning and Prometheus windows_exporter monitoring prevent worker process thread exhaustion during transactional spikes.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "iis-hosting",
    image: "/projects/project-2.svg"
  },
  {
    id: "release-automation",
    name: "Infrastructure & Release Automation",
    subtitle: "Reusable Production Release Automation for Monolithic IIS/.NET Systems",
    category: "DevOps Automation & Release Engineering",
    description: "Developed an automated PowerShell release framework with remote WinRM orchestration for consistent, repeatable deployments across distributed Windows web servers.",
    businessProblem: "Manual deployment steps for monolithic .NET releases across distributed Windows servers introduced configuration drift, prolonged release windows, and rollback complexity.",
    engineeringSolution: "Engineered an automated PowerShell release framework with remote WinRM orchestration, pre-deployment validation, configuration comparison, and zero-touch rollback safeguards.",
    implementation: "Developed modular PowerShell scripts for remote artifact delivery, automated IIS website/pool state management, SHA-256 binary validation, configuration file diffing, and automated rollback execution upon sanity check failure.",
    operationalOutcome: "Standardized release deployment procedures across staging and production, eliminating configuration drift and enabling predictable, verified releases.",
    technologiesUsed: ["PowerShell", "WinRM", "Windows Server", "IIS 10", "Pester", "Bash", "Batch", "SHA-256"],
    lessonsLearned: "Coupling pre-deployment schema validation with automated snapshot rollbacks provides a safe, reproducible release procedure without prolonged downtime.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "iis-hosting",
    image: "/projects/project-3.svg"
  },
  {
    id: "monitoring-observability",
    name: "Monitoring & Observability",
    subtitle: "Heterogeneous Infrastructure Monitoring across Linux & Windows",
    category: "Observability & Incident Telemetry",
    description: "Built a centralized monitoring environment using Prometheus and Grafana for comprehensive Linux and Windows infrastructure metrics with zero monitor overhead.",
    businessProblem: "Heterogeneous server environments lacked centralized visibility, making it difficult to detect CPU spikes, memory leaks, and disk space exhaustion before service disruption.",
    engineeringSolution: "Configured exporter-based metric collection using node_exporter and windows_exporter, engineered custom PromQL queries, and built centralized Grafana operational dashboards.",
    implementation: "Validated Prometheus scrape targets, confirmed metric availability, created PromQL queries for resource thresholds, and troubleshot exporter scraping and connectivity issues.",
    operationalOutcome: "Delivered comprehensive infrastructure observability across Windows and Linux, enabling proactive resource bottleneck detection and reducing incident triage time.",
    technologiesUsed: ["Prometheus", "Grafana", "windows_exporter", "node_exporter", "PromQL", "Linux", "Windows Server"],
    lessonsLearned: "Creating tailored PromQL queries aligned with operating system metrics prevents alert noise while maintaining high visibility into critical infrastructure constraints.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "monitoring",
    image: "/projects/project-4.svg"
  },
  {
    id: "aws-resource-tracker",
    name: "AWS Resource Tracker",
    subtitle: "Cloud Operations Automation & Recurring Inventory Auditing",
    category: "Cloud Automation & Scripting",
    description: "Developed a Bash-based utility using AWS CLI to collect AWS resource information and generate automated operational reports.",
    businessProblem: "Manual inventory tracking of regional cloud compute, storage, and networking resources across active AWS accounts was tedious and error-prone.",
    engineeringSolution: "Created a lightweight shell automation utility utilizing the AWS CLI to query active resources and format structured operational summary reports.",
    implementation: "Scripted AWS CLI commands to discover EC2, S3, IAM, and networking resources, and scheduled automated recurring execution via Linux Cron.",
    operationalOutcome: "Automated routine cloud resource discovery and reporting, reducing manual audit effort and providing dependable periodic operational visibility.",
    technologiesUsed: ["AWS", "Bash", "AWS CLI", "EC2", "S3", "IAM", "VPC", "Linux Cron"],
    lessonsLearned: "Lightweight CLI-driven automation combined with native Linux Cron provides a reliable, low-overhead solution for recurring operational reporting without heavy external tooling.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "monitoring",
    image: "/projects/project-5.svg"
  },
  {
    id: "msme-application",
    name: "MSME Application",
    subtitle: "Java & React Application Deployment on Linux Infrastructure",
    category: "Application Infrastructure & Deployments",
    description: "Engineered application deployment workflows for a Java-based fintech application running on Linux, covering build artifacts, deployment, service management, and validation.",
    businessProblem: "Manual artifact handling and unstandardized release procedures led to deployment delays and runtime inconsistencies across staging and production hosts.",
    engineeringSolution: "Leveraged Azure DevOps and TFS CI/CD workflows to manage build artifacts, automate Linux application rollouts, and streamline release verification.",
    implementation: "Automated application-management activities using Linux scripting, managed deployment packages, conducted post-deployment health validation, and analyzed system and runtime logs.",
    operationalOutcome: "Standardized Linux application deployment cycles, eliminating configuration drift and accelerating issue resolution during environment promotion.",
    technologiesUsed: ["Java", "React", "Linux", "systemd", "Nginx", "Azure DevOps", "TFS"],
    lessonsLearned: "Pairing CI/CD build artifact promotion with automated Linux sanity-check scripts prevents deployment errors and ensures rapid detection of runtime failures.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "integration-platform",
    image: "/projects/project-6.svg"
  }
];

export const architecturesData: ArchitectureBlueprint[] = [
  {
    id: "iis-hosting",
    title: "IIS / .NET Production Application",
    type: "iis",
    tag: "Enterprise Web Tier",
    flowSummary: "Client → Load Balancer / Nginx → IIS Web Nodes → Application Layer → Database",
    purpose: "Delivers resilient, secure web application hosting using Nginx reverse proxying, WAF inspection, and IIS application pool lifecycle management.",
    description: "Production IIS architecture utilizing Nginx as a reverse proxy for request routing, SSL/TLS termination, and application traffic management to monolithic ASP.NET applications on Windows Server.",
    technologies: ["Nginx", "WAF/ModSecurity", "IIS 10", "ASP.NET", ".NET Framework", "Windows Server", "SQL Server", "Prometheus"],
    responsibilities: "Configure Nginx reverse proxy routes, manage IIS application pools and worker limits, and troubleshoot HTTP/TLS, WAF, and database connectivity.",
    operationalNotes: "Proactive recycling limit tuning and Prometheus monitoring prevent worker process thread exhaustion during transactional spikes.",
    nodes: [
      { id: "client", label: "Client Ingress", role: "External Request Source", details: "Public banking clients initiating HTTPS requests over TLS 1.3." },
      { id: "nginx", label: "Load Balancer / Nginx", role: "Reverse Proxy & Load Balancer", details: "Terminates TLS, filters malicious payloads via ModSecurity/WAF, and balances traffic across web tiers." },
      { id: "iis", label: "IIS 10 Web Nodes", role: "Application Server Host", details: "Manages dedicated application pools, worker process recycling rules, and HTTP request pipelines across dual cluster nodes." },
      { id: "dotnet", label: "Application Layer (.NET)", role: "Application Runtime", details: "Executes core fintech business logic, session handling, and backend service communication on .NET Framework 4.8." },
      { id: "db", label: "Database Tier (SQL Server)", role: "Database Persistence", details: "Transactional database tier with replication, tuned connection pooling, and automated backup verification." },
      { id: "prom", label: "Prometheus & Exporter", role: "Observability Layer", details: "windows_exporter captures CPU, memory, thread pool, and IIS request rates for PromQL alerting." }
    ]
  },
  {
    id: "integration-platform",
    title: "Integration Platform",
    type: "docker",
    tag: "Multi-Service Container Runtime",
    flowSummary: "User → Nginx → React → API/App Handler → Adapters → Services → Consul / Redis → SQL Server",
    purpose: "Standardizes multi-service deployment boundaries, service lifecycle management, and ingress routing.",
    description: "Multi-service containerized architecture orchestrated via Docker Compose, running React frontend and Go backend services behind an Nginx reverse proxy on Linux with Consul discovery and Redis caching.",
    technologies: ["React", "Vite", "Go", "Docker", "Nginx", "Consul", "Redis", "SQL Server", "Linux"],
    responsibilities: "Manage Docker Compose configurations, bridge container networks, configure Nginx reverse proxy with HTTPS, and triage container and service logs.",
    operationalNotes: "Container restart policies and structured logging allow fast diagnosis of 4xx/5xx responses and connection bottlenecks.",
    nodes: [
      { id: "user", label: "User Ingress", role: "Request Source", details: "Client browsers accessing web interface and external systems invoking integration endpoints over HTTPS:443." },
      { id: "nginx", label: "Nginx Gateway", role: "Reverse Proxy & Router", details: "Directs web requests to React container and API requests to Go backend with SSL/TLS termination and CORS management." },
      { id: "react", label: "React Frontend", role: "UI Container", details: "Containerized Single Page Application built with Vite, served with static caching and health check endpoints." },
      { id: "api", label: "API / App Handler", role: "Go Gateway", details: "Lightweight compiled Go service container handling authentication, routing, and concurrency via Goroutines." },
      { id: "adapters", label: "Integration Adapters", role: "Protocol Abstraction", details: "Translates payload schemas, manages external API connectors, and enforces rate limits." },
      { id: "services", label: "Core Services", role: "Business Logic", details: "Docker containerized microservices supervised on Linux with health probes and auto-restart policies." },
      { id: "consul-redis", label: "Consul & Redis", role: "Discovery & Cache", details: "Consul key/value registry for service discovery paired with Redis in-memory cache for session state." },
      { id: "db", label: "SQL Server", role: "Database Persistence", details: "Persistent transactional database tier with automated backups and connection pool management." }
    ]
  },
  {
    id: "monitoring",
    title: "Monitoring & Observability",
    type: "pipeline",
    tag: "Enterprise Observability",
    flowSummary: "Windows & Linux Servers → Exporters → Prometheus → Grafana",
    purpose: "Provides centralized infrastructure and application visibility across heterogeneous environments without increasing server load.",
    description: "Enterprise observability architecture collecting system and runtime metrics from Windows Server and Linux hosts via lightweight exporters, scraped by Prometheus, and visualized in Grafana.",
    technologies: ["Prometheus", "Grafana", "windows_exporter", "node_exporter", "PromQL", "Linux", "Windows Server"],
    responsibilities: "Deploy and validate exporters, configure Prometheus scrape intervals and targets, craft custom PromQL queries, and design operational Grafana dashboards.",
    operationalNotes: "Exporter-based metric collection operates with negligible resource overhead while delivering real-time telemetry for CPU, memory, IIS request rates, and disk I/O.",
    nodes: [
      { id: "servers", label: "Windows & Linux Servers", role: "Monitored Fleet", details: "Production server fleet hosting IIS/.NET and Linux microservices across cloud and on-premises environments." },
      { id: "exporters", label: "Exporters (node & windows)", role: "Metrics Collection Agents", details: "windows_exporter (port 9182) and node_exporter (port 9100) gathering host, CPU, memory, disk, and IIS performance data." },
      { id: "prom", label: "Prometheus (TSDB)", role: "Metrics Storage & Query Engine", details: "Time-series database executing 15s scrape intervals, evaluating PromQL threshold rules, and storing historical telemetry." },
      { id: "grafana", label: "Grafana Dashboards", role: "Visualization & Incident Triage", details: "Real-time unified operational dashboards providing fleet overview, latency heatmaps, and capacity planning metrics." }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Craft Silicon",
    role: "System Administrator – E2",
    duration: "Feb 2025 – Present",
    responsibilities: [
      "Manage and support production, UAT, Pre-Production, QA, and DEV application environments across on-premises, AWS, and GCP infrastructure.",
      "Administer IIS 10 and Windows Server, managing application pools, worker process recycling rules, runtime limits, and diagnostic log analysis for monolithic ASP.NET / .NET Framework applications.",
      "Design and maintain IIS deployment architecture using Nginx as a reverse proxy for request routing, web-tier security, and application traffic management.",
      "Administer compute, networking, security groups, and cloud environments across AWS and GCP for enterprise and SaaS client platforms.",
      "Execute and validate Disaster Recovery drills across SaaS and enterprise applications, confirming infrastructure recovery, application availability, failover procedures, and service restoration.",
      "Build and maintain Prometheus and Grafana monitoring for Windows and Linux infrastructure using windows_exporter and node_exporter with tailored PromQL alerts.",
      "Coordinate release management and deployment support using Azure DevOps and TFS, managing build artifacts and automated validation.",
      "Remediate VAPT findings by implementing HSTS, Content-Security-Policy (CSP), X-Frame-Options, and Permissions Policy security headers.",
      "Automate operational and configuration tasks using PowerShell, Bash, and Batch scripts."
    ],
    achievements: [
      "Participated in and validated 10+ Disaster Recovery drills across SaaS and enterprise applications with zero critical deviations during recovery validation.",
      "Implemented unified Prometheus and Grafana monitoring covering Windows and Linux infrastructure with custom exporters and PromQL queries.",
      "Supported seamless APAC and SPBD UAT to LIVE client environment onboarding and production movement.",
      "Hardened web-tier security and eliminated vulnerabilities through comprehensive VAPT remediation across production applications."
    ],
    businessImpact: "Ensured high availability, deployment integrity, and disaster recovery readiness for business-critical fintech and SaaS platforms across on-premises, AWS, and GCP environments."
  },
  {
    company: "Wikiprospects",
    role: "IT Administrator",
    duration: "May 2023 – Jan 2025",
    responsibilities: [
      "Administered core IT infrastructure, local network systems (LAN/WAN), Windows systems, and office technology operations.",
      "Managed cloud resources across AWS (EC2, S3, IAM, and VPC fundamentals) for business application hosting and backups.",
      "Administered corporate SaaS platforms including Google Workspace, Zoho, Webex, and VoIP systems.",
      "Maintained website and infrastructure operations, domain routing, and user access permissions.",
      "Provided technical support, hardware/software troubleshooting, and developed Bash and PowerShell scripts for operational tasks.",
      "Built the foundational networking, systems administration, and cloud infrastructure experience that led toward DevOps, SRE, and cloud engineering."
    ],
    achievements: [
      "Maintained consistent IT infrastructure and network stability across dual-OS systems through active administration and monitoring.",
      "Automated routine administrative workflows and system backups using scheduled PowerShell and Bash scripts.",
      "Successfully supported business technology needs, end-user systems, and cloud connectivity with zero major operational disruptions."
    ],
    businessImpact: "Provided dependable IT infrastructure administration, network management, cloud resource configuration, and operational support that formed the solid foundation for advancing into DevOps and Site Reliability Engineering."
  }
];

export const skillsData: SkillGroup[] = [
  {
    title: "Cloud & Infrastructure",
    domainLens: "Cloud Footprint",
    description: "Management, networking, and operations of regional client infrastructure across cloud providers and on-premises environments.",
    technologies: ["AWS", "GCP", "EC2", "S3", "IAM", "VPC", "Linux", "Windows Server", "IIS 10", "Nginx"]
  },
  {
    title: "DevOps & CI/CD",
    domainLens: "Release Promotion",
    description: "Build artifact coordination, release management, and deployment automation across DEV, QA, UAT, and PROD.",
    technologies: ["Azure DevOps", "TFS", "Git", "GitHub", "Docker", "CI/CD Concepts", "Deployment Automation", "Release Management"]
  },
  {
    title: "Monitoring & Observability",
    domainLens: "Telemetry & SRE",
    description: "Exporter-based metric collection, PromQL analysis, alerting rules, and unified Grafana dashboards.",
    technologies: ["Prometheus", "Grafana", "windows_exporter", "node_exporter", "Application Monitoring", "Server Monitoring", "Incident Investigation", "RCA"]
  },
  {
    title: "Automation & Scripting",
    domainLens: "Operational Toil Elimination",
    description: "Administrative scripting for automated configuration validation, log maintenance, and cloud discovery.",
    technologies: ["PowerShell", "Bash", "Batch", "Python"]
  },
  {
    title: "Application Infrastructure",
    domainLens: "Runtimes & Web Tier",
    description: "Web tier configuration, application pool recycling, container runtimes, and service dependencies.",
    technologies: [".NET / IIS", "Go", "Java", "React", "Nginx", "Docker", "systemd", "SQL Server", "Redis", "Consul"]
  },
  {
    title: "Security & Reliability",
    domainLens: "SRE Standard",
    description: "Production security hardening, incident management, disaster recovery drills, and business continuity.",
    technologies: ["VAPT Remediation", "WAF", "Security Headers", "HSTS", "CSP", "Permissions Policy", "Production Troubleshooting", "DR Drills", "Backup / Rollback", "RCA", "SLA / SLO Concepts"]
  }
];

export const workflowStages = [
  {
    step: "01",
    title: "Production Operations",
    subtitle: "Application & Infrastructure Operations",
    flow: "IIS 10 → Windows Server → .NET → Runtime Health",
    description: "Manage high-availability application pools, runtime limits, and worker process health for monolithic ASP.NET platforms."
  },
  {
    step: "02",
    title: "Deployments & Release",
    subtitle: "Artifacts → Deployment → Validation",
    flow: "Azure DevOps → TFS → Build Artifacts → CI/CD",
    description: "Orchestrate release promotion, manage versioned build artifacts, and execute automated deployment validation scripts across environments."
  },
  {
    step: "03",
    title: "Observability",
    subtitle: "Prometheus → PromQL → Grafana",
    flow: "node_exporter → windows_exporter → Telemetry",
    description: "Collect host and application metrics across Linux and Windows with minimal overhead, building PromQL queries and Grafana dashboards."
  },
  {
    step: "04",
    title: "Reliability & DR",
    subtitle: "Health Checks → DR → Recovery",
    flow: "Failover Validation → Service Restoration → Zero Deviations",
    description: "Execute structured Disaster Recovery drills across multi-cloud infrastructure, validating replication and recovery objectives."
  },
  {
    step: "05",
    title: "Operational Automation",
    subtitle: "PowerShell → Bash → AWS CLI → Cron",
    flow: "Playbooks → Health Audits → Resource Discovery",
    description: "Develop administrative scripting tools to automate routine configuration audits, log retention, and cloud discovery."
  },
  {
    step: "06",
    title: "Incident Triage & RCA",
    subtitle: "Logs → Sub-status → Corrective Action",
    flow: "Incident Diagnosis → Root Cause Analysis → Remediation",
    description: "Diagnose application exceptions, memory exhaustion, WAF blocks, and connectivity failures to prevent recurrence."
  }
];
