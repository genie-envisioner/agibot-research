// Open source models data

export interface Model {
  id: string;
  name: string;
  description: string;
  category: 'Foundation' | 'World Model' | 'Control' | 'Perception' | 'Multimodal';
  tags: string[];
  githubUrl: string;
  huggingfaceUrl?: string;
  paperUrl?: string;
  demoUrl?: string;
  image: string;
  features: string[];
  metrics?: { name: string; value: string }[];
  releaseDate: string;
  status: 'Stable' | 'Beta' | 'Experimental';
}

export const models: Model[] = [
  {
    id: 'go-1-foundation',
    name: 'GO-1 Foundation',
    description: 'Large-scale foundation model for embodied intelligence with unified multimodal understanding.',
    category: 'Foundation',
    tags: ['Multimodal', 'Foundation', 'Embodied AI', 'Large Model'],
    githubUrl: 'https://github.com/agi-bot/go-1-foundation',
    huggingfaceUrl: 'https://huggingface.co/agibot/go-1-foundation',
    paperUrl: '/papers/go-1-foundation.pdf',
    image: '/images/abstract_large_language_model_architecture_diagram.jpg',
    features: [
      '10B parameter multimodal architecture',
      'Vision-Language-Action unified training',
      'Real-time inference optimization',
      'Modular component design'
    ],
    metrics: [
      { name: 'Parameters', value: '10B' },
      { name: 'Training Data', value: '1TB' },
      { name: 'Inference Speed', value: '50ms' }
    ],
    releaseDate: '2024-12-01',
    status: 'Stable'
  },
  {
    id: 'genie-world-model',
    name: 'Genie World Model',
    description: 'Universal world model for learning and simulating complex physical environments.',
    category: 'World Model',
    tags: ['World Model', 'Simulation', 'Physics', 'Prediction'],
    githubUrl: 'https://github.com/agi-bot/genie-world-model',
    huggingfaceUrl: 'https://huggingface.co/agibot/genie-world-model',
    paperUrl: '/papers/genie-world-model.pdf',
    image: '/images/machine_learning_climate_modeling_digital_twin_earth_diagram.jpg',
    features: [
      'Predictive environment simulation',
      'Few-shot adaptation to new environments',
      'Causal reasoning capabilities',
      'Multi-agent interaction modeling'
    ],
    metrics: [
      { name: 'Simulation Accuracy', value: '95%' },
      { name: 'Environments', value: '500+' },
      { name: 'Speed-up', value: '1000x' }
    ],
    releaseDate: '2024-11-15',
    status: 'Beta'
  },
  {
    id: 'embodied-controller',
    name: 'Embodied Controller',
    description: 'Hierarchical control architecture for robot manipulation and navigation tasks.',
    category: 'Control',
    tags: ['Control', 'Manipulation', 'Navigation', 'Hierarchical'],
    githubUrl: 'https://github.com/agi-bot/embodied-controller',
    paperUrl: '/papers/embodied-controller.pdf',
    demoUrl: 'https://agibot-research.com/demos/controller',
    image: '/images/neural_network_architecture_diagram_ai_data_visualization.jpg',
    features: [
      'Hierarchical control architecture',
      'Multi-task learning capabilities',
      'Real-time adaptation',
      'Safety-aware planning'
    ],
    metrics: [
      { name: 'Success Rate', value: '92%' },
      { name: 'Tasks', value: '100+' },
      { name: 'Response Time', value: '10ms' }
    ],
    releaseDate: '2024-10-20',
    status: 'Stable'
  },
  {
    id: 'perception-engine',
    name: 'Perception Engine',
    description: 'Advanced multimodal perception system for embodied AI agents.',
    category: 'Perception',
    tags: ['Perception', 'Vision', 'Multimodal', 'Real-time'],
    githubUrl: 'https://github.com/agi-bot/perception-engine',
    huggingfaceUrl: 'https://huggingface.co/agibot/perception-engine',
    paperUrl: '/papers/perception-engine.pdf',
    image: '/images/ai_semantic_clustering_neural_network_data_visualization.jpg',
    features: [
      '3D scene understanding',
      'Object detection and tracking',
      'Semantic segmentation',
      'Multimodal sensor fusion'
    ],
    metrics: [
      { name: 'mAP@0.5', value: '89.5%' },
      { name: 'FPS', value: '60' },
      { name: 'Latency', value: '16ms' }
    ],
    releaseDate: '2024-09-10',
    status: 'Stable'
  },
  {
    id: 'multimodal-llm',
    name: 'AgiBot-VLM',
    description: 'Vision-language model optimized for embodied AI applications.',
    category: 'Multimodal',
    tags: ['Vision-Language', 'Multimodal', 'Instruction Following'],
    githubUrl: 'https://github.com/agi-bot/agibot-vlm',
    huggingfaceUrl: 'https://huggingface.co/agibot/agibot-vlm',
    paperUrl: '/papers/agibot-vlm.pdf',
    image: '/images/transformer_neural_network_architecture_diagram_llm.jpg',
    features: [
      'Vision-language understanding',
      'Instruction following',
      'Scene reasoning',
      'Action grounding'
    ],
    metrics: [
      { name: 'VQA Accuracy', value: '87.2%' },
      { name: 'BLEU Score', value: '34.1' },
      { name: 'CIDEr', value: '128.5' }
    ],
    releaseDate: '2024-08-25',
    status: 'Beta'
  },
  {
    id: 'rl-framework',
    name: 'AgiBot-RL',
    description: 'Scalable reinforcement learning framework for embodied AI research.',
    category: 'Foundation',
    tags: ['Reinforcement Learning', 'Framework', 'Distributed', 'Research'],
    githubUrl: 'https://github.com/agi-bot/agibot-rl',
    paperUrl: '/papers/agibot-rl.pdf',
    demoUrl: 'https://agibot-research.com/demos/rl',
    image: '/images/neural_network_word_vector_language_model_architecture_diagram.jpg',
    features: [
      'Distributed training support',
      'Multi-environment compatibility',
      'Advanced exploration strategies',
      'Modular algorithm implementation'
    ],
    metrics: [
      { name: 'Environments', value: '50+' },
      { name: 'Algorithms', value: '15+' },
      { name: 'Throughput', value: '10K eps/s' }
    ],
    releaseDate: '2024-07-30',
    status: 'Experimental'
  }
];

export const categories = [
  'All',
  'Foundation',
  'World Model',
  'Control',
  'Perception',
  'Multimodal'
] as const;

export type ModelCategory = typeof categories[number];
