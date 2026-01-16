import {
  Server,
  Shield,
  Cloud,
  Network,
  HardDrive,
  Activity,
  Headphones,
  LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  deliverables: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: "infraestrutura",
    icon: Server,
    title: "Infraestrutura de TI",
    shortDescription: "Projetos e implementação de ambientes de alta performance para operações críticas.",
    heroTitle: "Projetos de Alto Desempenho para Infraestrutura Crítica",
    heroSubtitle: "Desenho, implementação e otimização de ambientes que garantem performance, disponibilidade e escalabilidade para seu negócio.",
    deliverables: [
      "Análise e diagnóstico de ambiente atual",
      "Projeto de arquitetura de infraestrutura",
      "Implementação de servidores físicos e virtuais",
      "Configuração de storage e sistemas de armazenamento",
      "Virtualização com VMware, Hyper-V ou Proxmox",
      "Migração de workloads e consolidação de ambientes",
    ],
    benefits: [
      "Alta disponibilidade e redundância",
      "Performance previsível e consistente",
      "Redução de custos operacionais",
      "Escalabilidade sob demanda",
      "Gestão simplificada de recursos",
    ],
  },
  {
    id: "ciberseguranca",
    icon: Shield,
    title: "Cibersegurança",
    shortDescription: "Proteção completa contra ameaças, compliance e gestão de riscos cibernéticos.",
    heroTitle: "Proteção Avançada Contra Ameaças Cibernéticas",
    heroSubtitle: "Estratégias de defesa em profundidade para proteger seus dados, sistemas e reputação contra ataques cada vez mais sofisticados.",
    deliverables: [
      "Assessment de segurança e análise de vulnerabilidades",
      "Implementação de firewalls de próxima geração",
      "Soluções de EDR/XDR e proteção de endpoints",
      "Gestão de identidade e acesso (IAM)",
      "Security Operations Center (SOC) 24/7",
      "Resposta a incidentes e forense digital",
    ],
    benefits: [
      "Redução de superfície de ataque",
      "Conformidade com LGPD e regulamentações",
      "Visibilidade completa do ambiente",
      "Resposta rápida a incidentes",
      "Proteção de reputação e continuidade",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Data Center",
    shortDescription: "Migração, operação e otimização de ambientes cloud e data centers híbridos.",
    heroTitle: "Transformação Digital com Cloud e Data Center",
    heroSubtitle: "Estratégias de cloud híbrida e multi-cloud para acelerar a inovação com controle de custos e governança.",
    deliverables: [
      "Assessment de workloads para cloud",
      "Migração para AWS, Azure ou Google Cloud",
      "Arquitetura de cloud híbrida e multi-cloud",
      "Otimização de custos e FinOps",
      "Infraestrutura como código (IaC)",
      "Design e operação de data centers privados",
    ],
    benefits: [
      "Agilidade e time-to-market acelerado",
      "Escalabilidade elástica",
      "Otimização de investimentos",
      "Resiliência e disaster recovery",
      "Inovação contínua",
    ],
  },
  {
    id: "redes",
    icon: Network,
    title: "Redes Corporativas",
    shortDescription: "Projeto, implementação e gestão de redes LAN, WAN e SD-WAN de alta performance.",
    heroTitle: "Conectividade de Alta Performance para Empresas",
    heroSubtitle: "Redes corporativas modernas, seguras e preparadas para suportar a transformação digital do seu negócio.",
    deliverables: [
      "Projeto de arquitetura de rede",
      "Implementação de switches e roteadores enterprise",
      "Soluções de SD-WAN e otimização de WAN",
      "Redes Wi-Fi corporativas de alta densidade",
      "Segmentação de rede e microsegmentação",
      "Network Access Control (NAC)",
    ],
    benefits: [
      "Performance e baixa latência",
      "Segurança integrada à rede",
      "Visibilidade e controle centralizado",
      "Suporte a aplicações críticas",
      "Mobilidade e trabalho híbrido",
    ],
  },
  {
    id: "backup",
    icon: HardDrive,
    title: "Backup & Recuperação",
    shortDescription: "Proteção de dados com estratégias de backup, DR e recuperação de desastres.",
    heroTitle: "Proteção de Dados e Continuidade de Negócios",
    heroSubtitle: "Estratégias robustas de backup e disaster recovery para garantir que seus dados estejam sempre protegidos e recuperáveis.",
    deliverables: [
      "Assessment de política de backup atual",
      "Implementação de soluções de backup enterprise",
      "Backup para cloud (AWS, Azure, Google)",
      "Replicação de dados e sites secundários",
      "Plano de Disaster Recovery (DRP)",
      "Testes periódicos de recuperação",
    ],
    benefits: [
      "Proteção contra ransomware",
      "RTO e RPO adequados ao negócio",
      "Conformidade regulatória",
      "Recuperação rápida de incidentes",
      "Continuidade operacional garantida",
    ],
  },
  {
    id: "monitoramento",
    icon: Activity,
    title: "Monitoramento & Observabilidade",
    shortDescription: "Visibilidade completa do ambiente com monitoramento proativo e observabilidade.",
    heroTitle: "Visibilidade Total do Seu Ambiente de TI",
    heroSubtitle: "Monitoramento proativo e observabilidade para identificar problemas antes que impactem o negócio.",
    deliverables: [
      "Implementação de plataformas de monitoramento",
      "Dashboards customizados e real-time",
      "Alertas inteligentes e escalation",
      "APM e monitoramento de aplicações",
      "Log management e análise de eventos",
      "Correlação de eventos e AIOps",
    ],
    benefits: [
      "Detecção antecipada de problemas",
      "Redução de MTTR",
      "Tomada de decisão baseada em dados",
      "Otimização de performance",
      "Experiência do usuário melhorada",
    ],
  },
  {
    id: "gerenciados",
    icon: Headphones,
    title: "Serviços Gerenciados",
    shortDescription: "Gestão completa de TI com equipe especializada e SLA garantido.",
    heroTitle: "Gestão de TI com Expertise e Compromisso",
    heroSubtitle: "Deixe a operação de TI com especialistas e foque no que realmente importa: o crescimento do seu negócio.",
    deliverables: [
      "NOC 24/7 com monitoramento proativo",
      "Gestão de incidentes e problemas",
      "Administração de servidores e infraestrutura",
      "Patch management e atualizações",
      "Gestão de ativos e inventário",
      "Relatórios gerenciais e SLA tracking",
    ],
    benefits: [
      "Foco no core business",
      "Previsibilidade de custos",
      "Acesso a especialistas certificados",
      "SLA garantido contratualmente",
      "Melhoria contínua de processos",
    ],
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
