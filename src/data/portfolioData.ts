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
  name: "Sudharsan S",
  brandMonogram: "SUDHARSAN",
  designation: "DevOps Engineer | Site Reliability Engineer",
  summary: "DevOps/SRE-focused engineer with 3+ years of experience supporting business-critical fintech applications across production, infrastructure, deployment, monitoring, and cloud environments.",
  bio: "I work at the intersection of application operations, infrastructure, and reliability. My experience includes supporting business-critical fintech applications across Windows and Linux environments, managing production deployments, troubleshooting application and infrastructure issues, monitoring system health, and improving operational consistency through automation.",
  aboutMe: "My current focus is DevOps and Site Reliability Engineering, with hands-on experience across IIS, .NET, Linux, Nginx, Docker, Prometheus, Grafana, AWS, GCP, Azure DevOps, PowerShell, and Bash. I approach systems engineering with a production-first mindset, focusing on reliability, deployment integrity, and proactive observability.",
  yearsOfExperience: 3,
  industryExpertise: "Fintech, SaaS, Multi-Cloud & Enterprise Systems",
  avatarUrl: "/hero-sudharsan.jpg",
  metrics: [
    { label: "Years IT Experience", value: "3+", sub: "Production Operations & DevOps" },
    { label: "Disaster Recovery Drills", value: "10+", sub: "Multi-Cloud Enterprise Validations" },
    { label: "Critical Deviations in DR", value: "0", sub: "100% Compliance Record" },
    { label: "Target SLA Availability", value: "99.99%", sub: "High-Availability Fintech Platforms" },
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
    name: "Containerized Integration Platform",
    subtitle: "Containerized Application Deployment & Runtime Operations",
    category: "Containerization & Microservices",
    description: "Engineered deployment and runtime operations for a containerized integration platform consisting of a React frontend and Golang services running on Linux.",
    businessProblem: "Deploying multi-service integration components across varying environments caused runtime inconsistencies, port conflicts, and routing configuration errors.",
    engineeringSolution: "Implemented Docker Compose for multi-service application orchestration and configured Nginx reverse proxy with HTTPS routing and SSL/TLS termination.",
    implementation: "Managed container networking, environment configuration, and service lifecycle. Configured Nginx reverse proxy and HTTPS for frontend/API routing. Troubleshot service, database, SSL/TLS, CORS, HTTP 4xx/5xx, and container issues using application and container logs.",
    operationalOutcome: "Standardized multi-service container deployments across Linux hosts, ensuring reliable service communication, secure external access, and streamlined operational troubleshooting.",
    technologiesUsed: ["Docker", "Docker Compose", "Linux", "Nginx", "Golang", "React", "HTTPS", "SSL/TLS"],
    lessonsLearned: "Defining clear container network bridges and consolidating ingress through an Nginx reverse proxy simplifies service lifecycle management and cross-service debugging.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "docker-architecture",
    image: "/projects/project-1.jpg"
  },
  {
    id: "msme-app",
    name: "MSME Fintech Application Deployment",
    subtitle: "Java Application Deployment & Automated Pipeline Operations",
    category: "CI/CD & Release Engineering",
    description: "Engineered application deployment workflows for a Java-based fintech application running on Linux, covering build artifacts, deployment, service management, and validation.",
    businessProblem: "Manual artifact handling and unstandardized release procedures led to deployment delays and runtime inconsistencies across staging and production hosts.",
    engineeringSolution: "Leveraged Azure DevOps and TFS CI/CD workflows to manage build artifacts, automate Linux application rollouts, and streamline release verification.",
    implementation: "Automated application-management activities using Linux scripting, managed deployment packages, conducted post-deployment health validation, and analyzed system and runtime logs.",
    operationalOutcome: "Standardized Linux application deployment cycles, eliminating configuration drift and accelerating issue resolution during environment promotion.",
    technologiesUsed: ["Java", "Linux", "Azure DevOps", "TFS", "Bash", "CI/CD", "Systemd"],
    lessonsLearned: "Pairing CI/CD build artifact promotion with automated Linux sanity-check scripts prevents deployment errors and ensures rapid detection of runtime failures.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "devops-architecture",
    image: "/projects/project-2.jpg"
  },
  {
    id: "prometheus-grafana",
    name: "Prometheus & Grafana Observability",
    subtitle: "Enterprise Heterogeneous Infrastructure Monitoring",
    category: "Observability & Telemetry",
    description: "Built a centralized monitoring environment using Prometheus and Grafana for comprehensive Linux and Windows infrastructure metrics.",
    businessProblem: "Heterogeneous server environments lacked centralized visibility, making it difficult to detect CPU spikes, memory leaks, and disk space exhaustion before service disruption.",
    engineeringSolution: "Configured exporter-based metric collection using node_exporter and windows_exporter, engineered custom PromQL queries, and built centralized Grafana dashboards.",
    implementation: "Validated Prometheus scrape targets, confirmed metric availability, created PromQL queries for resource thresholds, and troubleshot exporter scraping and connectivity issues.",
    operationalOutcome: "Delivered comprehensive infrastructure observability across Windows and Linux, enabling proactive resource bottleneck detection and reducing incident triage time.",
    technologiesUsed: ["Prometheus", "Grafana", "Linux", "Windows Server", "node_exporter", "windows_exporter", "PromQL"],
    lessonsLearned: "Creating tailored PromQL queries aligned with operating system metrics prevents alert noise while maintaining high visibility into critical infrastructure constraints.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "monitoring-architecture",
    image: "/projects/project-3.jpg"
  },
  {
    id: "dr-validation",
    name: "Disaster Recovery & Failover Validation",
    subtitle: "Enterprise Disaster Recovery & Multi-Cloud Continuity",
    category: "Reliability & DR Operations",
    description: "Executed and validated Disaster Recovery drills across SaaS and enterprise applications, confirming infrastructure recovery, application availability, and failover procedures.",
    businessProblem: "Validating business continuity across enterprise client setups required structured failover execution, network verification, and zero transaction data loss.",
    engineeringSolution: "Coordinated mock failover scenarios, validated replication synchronization, verified DNS routing, and executed service restoration procedures.",
    implementation: "Conducted 10+ DR drills across regional client infrastructure on AWS, GCP, and on-premises environments, testing connectivity and executing post-switchover validation scripts.",
    operationalOutcome: "Successfully achieved 10+ Disaster Recovery drills with zero critical deviations during recovery validation, certifying business continuity compliance.",
    technologiesUsed: ["AWS", "GCP", "Windows Server", "Linux", "DNS", "PowerShell", "Failover Routing"],
    lessonsLearned: "Regular, structured DR validation is the only way to verify runbook accuracy and ensure recovery time objectives (RTO) are reliably met during unexpected outages.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "devops-architecture",
    image: "/projects/project-4.jpg"
  },
  {
    id: "aws-resource-tracker",
    name: "AWS Resource Tracker & Auditing",
    subtitle: "Cloud Operations Automation & Recurring Inventory",
    category: "Cloud Automation & Scripting",
    description: "Developed a Bash-based utility using AWS CLI to collect AWS resource information and generate automated operational reports.",
    businessProblem: "Manual inventory tracking of regional cloud compute, storage, and networking resources across active AWS accounts was tedious and error-prone.",
    engineeringSolution: "Created a lightweight shell automation utility utilizing the AWS CLI to query active resources and format structured operational summary reports.",
    implementation: "Scripted AWS CLI commands to discover EC2, S3, IAM, and networking resources, and scheduled automated recurring execution via Linux Cron.",
    operationalOutcome: "Automated routine cloud resource discovery and reporting, reducing manual audit effort and providing dependable periodic operational visibility.",
    technologiesUsed: ["AWS CLI", "Bash", "Linux", "Cron", "AWS Cloud"],
    lessonsLearned: "Lightweight CLI-driven automation combined with native Linux Cron provides a reliable, low-overhead solution for recurring operational reporting without heavy external tooling.",
    github: "https://github.com/raghav-sudharsan",
    liveDemo: "#",
    diagramId: "devops-architecture",
    image: "/projects/project-2.jpg"
  }
];

export const architecturesData: ArchitectureBlueprint[] = [
  {
    id: "iis-hosting",
    title: "IIS / .NET Production Application",
    type: "iis",
    tag: "Enterprise Web Tier",
    flowSummary: "Client → Nginx (WAF & TLS) → IIS Web Tier → ASP.NET / .NET Framework → SQL Server",
    purpose: "Delivers resilient, secure web application hosting using Nginx reverse proxying, WAF inspection, and IIS application pool lifecycle management.",
    description: "Production IIS architecture utilizing Nginx as a reverse proxy for request routing, SSL/TLS termination, and application traffic management to monolithic ASP.NET applications on Windows Server.",
    technologies: ["Nginx", "WAF/ModSecurity", "IIS 10", "ASP.NET", ".NET Framework", "Windows Server", "SQL Server", "Prometheus"],
    responsibilities: "Configure Nginx reverse proxy routes, manage IIS application pools and worker limits, and troubleshoot HTTP/TLS, WAF, and database connectivity.",
    operationalNotes: "Proactive recycling limit tuning and Prometheus monitoring prevent worker process thread exhaustion during transactional spikes.",
    nodes: [
      { id: "client", label: "Client Ingress", role: "External Request Source", details: "Public clients initiating HTTPS requests over TLS 1.3." },
      { id: "nginx", label: "Nginx & WAF", role: "Reverse Proxy & Load Balancer", details: "Terminates TLS, filters malicious payloads via ModSecurity/WAF, and balances traffic across web tiers." },
      { id: "iis", label: "IIS 10 Web Tier", role: "Application Server Host", details: "Manages dedicated application pools, worker process recycling rules, and HTTP request pipelines." },
      { id: "dotnet", label: "ASP.NET Framework", role: "Application Runtime", details: "Executes core fintech business logic, session handling, and backend service communication." },
      { id: "db", label: "SQL Server", role: "Database Persistence", details: "Transactional database tier with replication and automated backup verification." },
      { id: "prom", label: "Prometheus & Exporter", role: "Observability Layer", details: "windows_exporter captures CPU, memory, thread pool, and IIS request rates for PromQL alerting." }
    ]
  },
  {
    id: "docker-platform",
    title: "Containerized Integration Platform",
    type: "docker",
    tag: "Multi-Service Container Runtime",
    flowSummary: "Client → HTTPS → Nginx Ingress → React Frontend → Golang Services → Database / APIs",
    purpose: "Standardizes multi-service deployment boundaries, service lifecycle management, and ingress routing.",
    description: "Multi-service containerized architecture orchestrated via Docker Compose, running React frontend and Golang backend services behind an Nginx reverse proxy on Linux.",
    technologies: ["Docker", "Docker Compose", "Linux", "Nginx", "Golang", "React", "HTTPS"],
    responsibilities: "Manage Docker Compose configurations, bridge container networks, configure Nginx reverse proxy with HTTPS, and triage container and service logs.",
    operationalNotes: "Container restart policies and structured logging allow fast diagnosis of 4xx/5xx responses and connection bottlenecks.",
    nodes: [
      { id: "client", label: "Client Ingress", role: "Request Source", details: "Client browsers accessing web interface and external systems invoking integration endpoints." },
      { id: "nginx", label: "Nginx Ingress", role: "Reverse Proxy & Router", details: "Directs web requests to React container and API requests to Golang backend with SSL/TLS termination." },
      { id: "react", label: "React Frontend", role: "UI Container", details: "Containerized Single Page Application served with static caching and health check endpoints." },
      { id: "golang", label: "Golang Services", role: "Integration Engine", details: "Lightweight compiled service container handling data translation and external endpoint orchestration." },
      { id: "linux", label: "Linux Host & Docker", role: "Container Runtime Platform", details: "Docker Compose manages bridge networking, volume mounts, environment variables, and restart policies." },
      { id: "endpoints", label: "Database / APIs", role: "Upstream Dependencies", details: "Target database storage and third-party fintech API endpoints." }
    ]
  },
  {
    id: "java-devops",
    title: "Java / Linux CI/CD & Deployment Flow",
    type: "pipeline",
    tag: "Automated Deployment Pipeline",
    flowSummary: "Azure DevOps / TFS → Build Artifact → Linux Server (systemd) → Java App → Validation → Monitoring",
    purpose: "Coordinates application build artifacts, release pipelines, and automated environment promotion.",
    description: "End-to-end deployment workflow promoting application builds from source repositories through Azure DevOps/TFS pipelines to Linux production nodes with automated health validation.",
    technologies: ["Azure DevOps", "TFS", "Git", "Bash", "Java", "Linux", "Prometheus"],
    responsibilities: "Manage build artifacts, configure pipeline release stages, author validation scripts in Bash, and execute post-deployment validation.",
    operationalNotes: "Automated pre-flight and post-deployment validation scripts verify endpoint status and database connectivity before traffic switchover.",
    nodes: [
      { id: "git", label: "Git Repository", role: "Source Control", details: "Version controlled source repository tracking changes and release tags." },
      { id: "cicd", label: "Azure DevOps / TFS", role: "Build & Release Pipeline", details: "Automated build execution, compilation verification, and package generation." },
      { id: "artifact", label: "Build Artifact", role: "Versioned Package", details: "Immutable JAR/WAR deployment package published to artifact repository." },
      { id: "linux", label: "Linux Deployment", role: "Target Environment", details: "Automated deployment via shell scripts, systemd service lifecycle control, and configuration injection." },
      { id: "java", label: "Java Application", role: "Fintech Service Tier", details: "Running application instance with JVM monitoring, thread configuration, and structured logging." },
      { id: "verify", label: "Health & Telemetry", role: "Validation & Observability", details: "Automated health checks probe endpoints; node_exporter reports host metrics to Prometheus." }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    company: "Craft Silicon",
    role: "System Administrator E2",
    duration: "Feb 2025 – Present",
    responsibilities: [
      "Engineer and maintain production application environments, including deployments, configuration, monitoring, and availability for monolithic ASP.NET/.NET Framework applications.",
      "Manage IIS 10 and Windows Server including application pools, runtime configuration, deployment validation, HTTP troubleshooting, and application health.",
      "Execute Disaster Recovery drills across SaaS and enterprise applications, validating infrastructure recovery, application availability, failover procedures, and service restoration.",
      "Manage regional client infrastructure across AWS and GCP, including compute, networking, connectivity, and environment-specific configuration.",
      "Design and maintain Prometheus/Grafana monitoring for Windows and Linux infrastructure using exporters and PromQL.",
      "Design and maintain IIS deployment architecture using Nginx as a reverse proxy for request routing, web-tier security, and application traffic management.",
      "Troubleshoot Nginx, WAF/ModSecurity, load balancing, DNS, HTTPS/TLS, SQL Server, application, and infrastructure issues.",
      "Automate application and process-management tasks using PowerShell and Bash."
    ],
    achievements: [
      "Executed 10+ Disaster Recovery drills across SaaS and enterprise applications with zero critical deviations during recovery validation.",
      "Engineered Prometheus and Grafana monitoring covering Windows and Linux infrastructure with custom exporters and PromQL queries.",
      "Automated application configuration audits and routine operational tasks using PowerShell and Bash scripts."
    ],
    businessImpact: "Ensured high availability, deployment integrity, and disaster recovery readiness for business-critical fintech and SaaS platforms across on-premises, AWS, and GCP environments."
  },
  {
    company: "Wikiprospects",
    role: "System Administrator",
    duration: "May 2023 – Jan 2025",
    responsibilities: [
      "Supported Linux and Windows server environments, performing system administration, health monitoring, and server operations.",
      "Handled application and server troubleshooting, incident diagnosis, log analysis, and root cause investigation.",
      "Administered core network infrastructure, user permissions, and scheduled system backup routines.",
      "Developed Bash and PowerShell scripts to automate recurring operational and administrative tasks."
    ],
    achievements: [
      "Maintained server uptime and infrastructure stability across dual-OS environments through active system monitoring and log triage.",
      "Reduced manual administrative overhead by creating scheduled PowerShell and Bash automation scripts.",
      "Resolved server and network connectivity incidents through structured root-cause troubleshooting."
    ],
    businessImpact: "Supported Linux and Windows server environments, performing system administration, health monitoring, troubleshooting, log analysis, application/server operations, and recurring operational automation using Bash and PowerShell."
  }
];

export const skillsData: SkillGroup[] = [
  {
    title: "DevOps & CI/CD",
    domainLens: "What I Deploy",
    description: "Build artifact coordination, release promotion, and CI/CD deployment validation across environments.",
    technologies: ["Azure DevOps", "TFS", "Git", "GitHub", "GitLab", "Jenkins", "GitHub Actions", "CI/CD", "Build Artifacts", "Application Deployment"]
  },
  {
    title: "Cloud Infrastructure",
    domainLens: "Cloud Footprint",
    description: "Management, connectivity, and operations of regional client infrastructure across cloud providers.",
    technologies: ["AWS", "GCP", "EC2", "S3", "VPC", "IAM", "AWS CLI"]
  },
  {
    title: "Containers & Orchestration",
    domainLens: "Container Runtimes",
    description: "Multi-service container lifecycle management, image builds, and service networking with Docker Compose.",
    technologies: ["Docker", "Docker Compose", "Container Networking", "Multi-stage Builds"]
  },
  {
    title: "Observability & Metrics",
    domainLens: "What I Monitor",
    description: "Exporter-based metric collection, PromQL analysis, alerting rules, and real-time dashboard visibility.",
    technologies: ["Prometheus", "Grafana", "node_exporter", "windows_exporter", "PromQL", "Infrastructure Monitoring"]
  },
  {
    title: "Linux Administration",
    domainLens: "Operating Systems",
    description: "Operating system administration, shell scripting, service management, user permissions, and log analysis.",
    technologies: ["Ubuntu/Linux", "Bash", "Shell Scripting", "Cron", "Systemd", "Service Management", "Log Analysis"]
  },
  {
    title: "Windows & Application Hosting",
    domainLens: "Web Servers & Runtimes",
    description: "IIS 10 web server management, application pool recycling, worker process limits, and administrative PowerShell.",
    technologies: ["Windows Server", "IIS 10", "PowerShell", "ASP.NET", ".NET Framework", "Application Pools"]
  },
  {
    title: "Web Routing & Security",
    domainLens: "Network & Perimeter",
    description: "Reverse proxy routing, web-tier security, ingress traffic management, DNS, and SSL/TLS certificate handling.",
    technologies: ["Nginx", "Reverse Proxy", "Load Balancing", "WAF/ModSecurity", "DNS", "HTTP/HTTPS", "TLS 1.3", "CORS"]
  },
  {
    title: "Operations & Reliability",
    domainLens: "SRE Standard",
    description: "Production support, active incident response, root cause analysis, disaster recovery drills, and VAPT remediation.",
    technologies: ["Production Support", "Incident Response", "Root Cause Analysis (RCA)", "Disaster Recovery", "VAPT Remediation", "Runbooks"]
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
    description: "Orchestrate release promotion, manage versioned build artifacts, and execute automated deployment validation scripts."
  },
  {
    step: "03",
    title: "Observability",
    subtitle: "Prometheus → PromQL → Grafana",
    flow: "node_exporter → windows_exporter → Telemetry",
    description: "Collect host and application metrics across Linux and Windows, creating PromQL queries and real-time Grafana dashboards."
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
