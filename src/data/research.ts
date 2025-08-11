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
    authors: ['Jake Chen', 'Maria Rodriguez', 'Alex Thompson', 'Sarah Kim'],
    year: 2024,
    venue: 'NeurIPS 2024',
    tags: ['World Models', 'Embodied AI', 'Prediction', 'Simulation'],
    abstract: 'We introduce Genie Envisioner, a universal world model capable of learning complex physical environments from minimal data. Our model combines transformer architectures with physics-informed neural networks to enable accurate long-term prediction and planning for embodied agents. Experimental results demonstrate superior performance across diverse robotic tasks.',
    pdfUrl: '/papers/genie-envisioner-2024.pdf',
    codeUrl: 'https://github.com/agi-bot/genie-envisioner',
    projectUrl: 'https://genie-envisioner.agibot-research.com',
    videoUrl: 'https://youtube.com/watch?v=demo-genie',
    status: 'Published',
    featured: true
  },
  {
    id: 'go-1-architecture-2024',
    title: 'GO-1: Unified Architecture for Large-Scale Embodied Intelligence',
    authors: ['David Liu', 'Elena Petrov', 'Michael Chang', 'Lisa Wang'],
    year: 2024,
    venue: 'ICML 2024',
    tags: ['Large Models', 'Multimodal', 'Architecture', 'Embodied AI'],
    abstract: 'GO-1 presents a unified 10-billion parameter architecture that seamlessly integrates vision, language, and action modalities for embodied intelligence. Through novel cross-modal attention mechanisms and curriculum learning strategies, GO-1 achieves state-of-the-art performance on over 100 robotic manipulation and navigation tasks.',
    pdfUrl: '/papers/go-1-architecture-2024.pdf',
    codeUrl: 'https://github.com/agi-bot/go-1',
    projectUrl: 'https://go-1.agibot-research.com',
    status: 'Published',
    featured: true
  },
  {
    id: 'agibot-world-dataset-2024',
    title: 'AgiBot World: A Large-Scale Multi-Modal Dataset for Embodied AI',
    authors: ['Jennifer Zhang', 'Robert Johnson', 'Aisha Patel', 'Carlos Gonzalez'],
    year: 2024,
    venue: 'ICLR 2024',
    tags: ['Dataset', 'Multimodal', 'Robotics', 'Benchmarking'],
    abstract: 'AgiBot World introduces a comprehensive dataset containing over 1 million episodes of robot-environment interactions across 1000+ diverse scenarios. The dataset includes synchronized RGB-D video, tactile feedback, proprioception, and natural language annotations, establishing new benchmarks for embodied AI research.',
    pdfUrl: '/papers/agibot-world-dataset-2024.pdf',
    codeUrl: 'https://github.com/agi-bot/agibot-world',
    projectUrl: 'https://agibot-world.agibot-research.com',
    status: 'Published',
    featured: true
  },
  {
    id: 'hierarchical-control-2024',
    title: 'Hierarchical Control for Complex Manipulation Tasks via Embodied Intelligence',
    authors: ['Thomas Anderson', 'Nina Kumar', 'James Wilson'],
    year: 2024,
    venue: 'RSS 2024',
    tags: ['Control', 'Manipulation', 'Hierarchical Learning', 'Motor Skills'],
    abstract: 'We propose a hierarchical control framework that decomposes complex manipulation tasks into learnable primitive skills. Our approach combines high-level task planning with low-level motor control, enabling robots to adapt to new tasks through compositional skill learning and transfer.',
    pdfUrl: '/papers/hierarchical-control-2024.pdf',
    codeUrl: 'https://github.com/agi-bot/hierarchical-control',
    status: 'Published'
  },
  {
    id: 'multimodal-perception-2024',
    title: 'Unified Multimodal Perception for Embodied Agents',
    authors: ['Kevin Lee', 'Amanda Foster', 'Ryan Mitchell'],
    year: 2024,
    venue: 'CVPR 2024',
    tags: ['Perception', 'Multimodal', 'Computer Vision', 'Sensor Fusion'],
    abstract: 'This work presents a unified perception system that integrates visual, tactile, and proprioceptive information for robust embodied intelligence. Our approach employs cross-modal attention and contrastive learning to achieve superior performance in object recognition, manipulation, and navigation tasks.',
    pdfUrl: '/papers/multimodal-perception-2024.pdf',
    codeUrl: 'https://github.com/agi-bot/multimodal-perception',
    status: 'Published'
  },
  {
    id: 'few-shot-adaptation-2023',
    title: 'Few-Shot Adaptation of Embodied Agents to Novel Environments',
    authors: ['Sophie Martin', 'Daniel Garcia', 'Rachel Adams'],
    year: 2023,
    venue: 'NeurIPS 2023',
    tags: ['Few-Shot Learning', 'Adaptation', 'Meta-Learning', 'Generalization'],
    abstract: 'We investigate few-shot adaptation capabilities of embodied agents when encountering novel environments. Our meta-learning approach enables rapid adaptation with minimal environment-specific data, achieving strong generalization across diverse robotic platforms and tasks.',
    pdfUrl: '/papers/few-shot-adaptation-2023.pdf',
    codeUrl: 'https://github.com/agi-bot/few-shot-adaptation',
    status: 'Published'
  },
  {
    id: 'safe-exploration-rl-2023',
    title: 'Safe Exploration in Reinforcement Learning for Embodied Intelligence',
    authors: ['Mark Thompson', 'Jessica Chen', 'Paul Rodriguez'],
    year: 2023,
    venue: 'ICRA 2023',
    tags: ['Reinforcement Learning', 'Safety', 'Exploration', 'Risk Management'],
    abstract: 'Safety is crucial for embodied AI systems operating in real-world environments. We propose novel safe exploration strategies for RL that balance learning efficiency with risk minimization, enabling robots to learn complex behaviors while maintaining operational safety.',
    pdfUrl: '/papers/safe-exploration-rl-2023.pdf',
    codeUrl: 'https://github.com/agi-bot/safe-exploration',
    status: 'Published'
  }
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
