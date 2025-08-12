// Research papers data

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  tags: string[];
  abstract: string;
  pdfUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  videoUrl?: string;
  bibtex?: string;
  status: 'Published' | 'Under Review' | 'Preprint';
  featured?: boolean;
}

export const papers: Paper[] = [
  {
    id: 'genie-envisioner-2024',
    title: 'Genie Envisioner: A Universal World Model for Embodied Intelligence',
    authors: ['Yue Liao','Pengfei Zhou','Siyuan Huang','Donglin Yang','Shengcong Chen','Yuxin Jiang','Yue Hu','Jingbin Cai','Si Liu','Jianlan Luo','Liliang Chen','Shuicheng Yan','Maoqing Yao','Guanghui Ren',    ],
    year: 2025,
    venue: '2025',
    tags: ['World Models', 'Embodied AI', 'Dual-arm', 'Simulation'],
    abstract: 'We introduce Genie Envisioner (GE), a unified world foundation platform for robotic manipulation that integrates policy learning, evaluation, and simulation within a single video-generative framework. At its core, GE-Base is a large-scale, instruction-conditioned video diffusion model that captures the spatial, temporal, and semantic dynamics of real-world robotic interactions in a structured latent space. Built upon this foundation, GE-Act maps latent representations to executable action trajectories through a lightweight, flow-matching decoder, enabling precise and generalizable policy inference across diverse embodiments with minimal supervision. To support scalable evaluation and training, GE-Sim serves as an action-conditioned neural simulator, producing high-fidelity rollouts for closed-loop policy development. The platform is further equipped with EWMBench, a standardized benchmark suite measuring visual fidelity, physical consistency, and instruction-action alignment. Together, these components establish Genie Envisioner as a scalable and practical foundation for instruction-driven, general-purpose embodied intelligence.',
    pdfUrl: 'https://arxiv.org/pdf/2508.05635',
    codeUrl: 'https://github.com/AgibotTech/Genie-Envisioner',
    projectUrl: 'https://genie-envisioner.github.io/',
    // videoUrl: 'https://youtube.com/watch?v=demo-genie',
    status: 'Preprint',
    featured: true
  },
  {
    id: 'agibot-world-dataset-2024',
    title: 'Agibot world colosseo: A large-scale manipulation platform for scalable and intelligent embodied systems',
    authors: ['Team AgiBot-World'],
    year: 2025,
    venue: '2025',
    tags: ['Dataset', 'Vision-language-action-model', 'Robotic-manipulation', 'Benchmarking'],
    abstract: 'AgiBot World introduces a comprehensive dataset containing over 1 million episodes of robot-environment interactions across 1000+ diverse scenarios. The dataset includes synchronized RGB-D video, tactile feedback, proprioception, and natural language annotations, establishing new benchmarks for embodied AI research.',
    pdfUrl: 'https://arxiv.org/pdf/2503.06669',
    codeUrl: 'https://github.com/OpenDriveLab/AgiBot-World',
    projectUrl: 'https://agibot-world.com/',
    status: 'Published',
    featured: true
  },
];

export const years = [2025, 2024, 2023, 2022, 2021] as const;

export const tags = [
  'World Models',
  'Embodied AI',
  'Large Models',
  'Multimodal',
  'Control',
  'Perception',
  'Reinforcement Learning',
  'Planning',
  'Safety',
  'Language Grounding',
  'Dataset',
  'Survey',
  'Few-Shot Learning',
  'Simulation',
  'Transfer Learning'
] as const;

export type PaperTag = typeof tags[number];
export type PaperYear = typeof years[number];
