// Home page featured projects data

export interface HomeProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl?: string;
  learnMoreUrl?: string;
  githubUrl?: string;
  features: string[];
  stats?: { label: string; value: string }[];
}

export const homeProjects: HomeProject[] = [
  {
    id: 'hero',
    title: 'AgiBot Research',
    subtitle: 'Pioneering Embodied Intelligence',
    description: 'Leading the frontiers of embodied AI with cutting-edge research in robotics, world models, and intelligent agents. We bridge the gap between digital intelligence and physical reality.',
    image: './images/futuristic_ai_brain_neural_network_dark_hero.jpg',
    learnMoreUrl: '/about',
    features: [
      'Embodied Large & Small Brain Architecture',
      'Reinforcement Learning Systems',
      'World Model Development',
      'Physical Intelligence Research'
    ]
  },
  {
    id: 'agibot-world',
    title: 'AgiBot World',
    subtitle: 'Comprehensive Embodied AI Dataset',
    description: 'A revolutionary multi-modal dataset capturing diverse real-world interactions for training embodied AI agents. Featuring over 1M episodes of robot-environment interactions across 1000+ scenarios.',
    image: './images/ai_neural_network_data_visualization_concept.jpg',
    githubUrl: 'https://github.com/agi-bot/agibot-world',
    features: [
      'Multi-modal sensory data (RGB, Depth, Tactile)',
      '1000+ diverse environments and tasks',  
      'Standardized evaluation protocols',
      'Continuous expansion with community contributions'
    ],
    stats: [
      { label: 'Episodes', value: '1M+' },
      { label: 'Environments', value: '1000+' },
      { label: 'Modalities', value: '5' },
      { label: 'Downloads', value: '50K+' }
    ]
  },
  {
    id: 'go-1-model',
    title: 'GO-1 Large Model',
    subtitle: 'Next-Generation Embodied Intelligence',
    description: 'Our flagship large-scale model architecture combining language understanding, visual perception, and motor control into a unified embodied intelligence system.',
    image: './images/transformer_architecture_large_language_model_ai_diagram.jpg',
    learnMoreUrl: '/models',
    githubUrl: 'https://github.com/agi-bot/go-1',
    features: [
      '10B parameter unified multimodal architecture',
      'Real-time sensorimotor integration',
      'Natural language instruction following',
      'Adaptive behavior learning'
    ],
    stats: [
      { label: 'Parameters', value: '10B' },
      { label: 'Modalities', value: '6' },
      { label: 'Tasks', value: '100+' },
      { label: 'Success Rate', value: '92%' }
    ]
  },
  {
    id: 'genie-envisioner',
    title: 'Genie Envisioner',
    subtitle: 'Universal World Model',
    description: 'A powerful world model capable of learning and simulating complex physical environments from minimal data, enabling intelligent agents to plan and reason about the future.',
    image: './images/virtual_world_model_simulation_ai_genie_envisioner.jpg',
    learnMoreUrl: '/research',
    features: [
      'Predictive world simulation',
      'Few-shot environment learning',
      'Causal reasoning capabilities',
      'Multi-agent interaction modeling'
    ],
    stats: [
      { label: 'Simulation Speed', value: '1000x' },
      { label: 'Accuracy', value: '95%' },
      { label: 'Environments', value: '500+' },
      { label: 'Timesteps', value: '1M+' }
    ]
  }
];
