// About page data

export interface ResearchDirection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  keyTopics: string[];
  publications: number;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Internship' | 'Postdoc';
  level: 'Senior' | 'Mid' | 'Junior' | 'Entry';
  description: string;
  requirements: string[];
  responsibilities: string[];
  applyUrl: string;
  posted: string;
}

const imgPath = import.meta.env.BASE_URL || '/';

export const researchDirections: ResearchDirection[] = [
  {
    id: 'embodied-brain',
    title: 'Embodied Large & Small Brain',
    subtitle: 'Unified Intelligence Architecture',
    description: 'Developing integrated architectures that combine large-scale foundation models with efficient specialized modules for embodied intelligence. Our research focuses on creating systems that can leverage both general knowledge and task-specific expertise.',
    icon: 'Brain',
    image: `${imgPath}images/abstract_large_language_model_architecture_diagram.jpg`,
    keyTopics: [
      'Unified multimodal architectures',
      'Modular intelligence systems',
      'Large-scale model integration',
      'Efficient specialization'
    ],
    publications: 1
  },
  // {
  //   id: 'reinforcement-learning',
  //   title: 'Reinforcement Learning',
  //   subtitle: 'Adaptive Behavior Learning',
  //   description: 'Advancing reinforcement learning methods for embodied agents with focus on safe exploration, sample efficiency, and robust policy learning in real-world environments. We develop algorithms that enable agents to learn complex behaviors through interaction.',
  //   icon: 'Zap',
  //   image: `${imgPath}images/neural_network_word_vector_language_model_architecture_diagram.jpg`,
  //   keyTopics: [
  //     'Safe exploration strategies',
  //     'Sample-efficient learning',
  //     'Multi-task reinforcement learning',
  //     'Hierarchical policy learning'
  //   ],
  //   publications: 12
  // },
  {
    id: 'world-models',
    title: 'World Models',
    subtitle: 'Predictive Environment Understanding',
    description: 'Creating comprehensive world models that enable agents to understand, predict, and reason about their environment. Our models learn the underlying dynamics of complex systems to enable intelligent planning and decision-making.',
    icon: 'Globe',
    image: `${imgPath}images/virtual_world_model_simulation_ai_genie_envisioner.jpg`,
    keyTopics: [
      'Predictive modeling',
      'Physics simulation',
      'Causal reasoning',
      'Long-term planning'
    ],
    publications: 4
  },
  // {
  //   id: 'multimodal-perception',
  //   title: 'Multimodal Perception',
  //   subtitle: 'Integrated Sensing Systems',
  //   description: 'Building robust perception systems that integrate visual, tactile, auditory, and proprioceptive information for comprehensive environmental understanding. We focus on real-time processing and cross-modal learning.',
  //   icon: 'Eye',
  //   image: `${imgPath}images/ai_semantic_clustering_neural_network_data_visualization.jpg`,
  //   keyTopics: [
  //     'Cross-modal learning',
  //     'Sensor fusion',
  //     'Real-time perception',
  //     '3D scene understanding'
  //   ],
  //   publications: 10
  // },
  // {
  //   id: 'embodied-control',
  //   title: 'Embodied Control',
  //   subtitle: 'Intelligent Motor Skills',
  //   description: 'Developing sophisticated control systems for embodied agents that can perform complex manipulation and navigation tasks. Our research combines classical control theory with modern learning approaches.',
  //   icon: 'Settings',
  //   image: `${imgPath}images/neural_network_architecture_diagram_ai_data_visualization.jpg`,
  //   keyTopics: [
  //     'Hierarchical control',
  //     'Motor skill learning',
  //     'Adaptive manipulation',
  //     'Navigation systems'
  //   ],
  //   publications: 14
  // },
  // {
  //   id: 'human-ai-interaction',
  //   title: 'Human-AI Interaction',
  //   subtitle: 'Collaborative Intelligence',
  //   description: 'Researching natural and intuitive ways for humans and AI agents to collaborate. We focus on communication, trust, and shared understanding between humans and embodied AI systems.',
  //   icon: 'Users',
  //   image: `${imgPath}images/high_tech_ai_robot_research.jpg`,
  //   keyTopics: [
  //     'Natural language interaction',
  //     'Trust and transparency',
  //     'Collaborative planning',
  //     'Intent recognition'
  //   ],
  //   publications: 8
  // }
];

export const careers: Career[] = [
  {
    id: 'senior-research-scientist',
    title: 'Senior Research Scientist - Embodied AI',
    department: 'Research',
    location: 'San Francisco, CA / Remote',
    type: 'Full-time',
    level: 'Senior',
    description: 'Lead cutting-edge research in embodied artificial intelligence, focusing on world models and multimodal learning systems.',
    requirements: [
      'PhD in Computer Science, Robotics, or related field',
      '5+ years of experience in AI/ML research',
      'Strong publication record in top-tier conferences',
      'Experience with embodied AI or robotics',
      'Proficiency in Python, PyTorch/TensorFlow'
    ],
    responsibilities: [
      'Conduct innovative research in embodied AI',
      'Publish findings in top-tier venues',
      'Collaborate with interdisciplinary teams',
      'Mentor junior researchers and interns',
      'Present research at international conferences'
    ],
    applyUrl: 'mailto:careers@agibot-research.com?subject=Senior Research Scientist Application',
    posted: '2025-01-15'
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    department: 'Engineering',
    location: 'New York, NY / Hybrid',
    type: 'Full-time',
    level: 'Mid',
    description: 'Build and scale machine learning systems for embodied AI applications, from prototype to production.',
    requirements: [
      'MS/PhD in Computer Science or related field',
      '3+ years of ML engineering experience',
      'Experience with large-scale distributed training',
      'Strong software engineering skills',
      'Knowledge of robotics or embodied AI preferred'
    ],
    responsibilities: [
      'Design and implement ML pipelines',
      'Optimize model training and inference',
      'Collaborate with research teams',
      'Deploy models to production systems',
      'Maintain and monitor ML infrastructure'
    ],
    applyUrl: 'mailto:careers@agibot-research.com?subject=ML Engineer Application',
    posted: '2025-01-10'
  },
  {
    id: 'research-intern',
    title: 'Research Intern - Summer 2025',
    department: 'Research',
    location: 'Multiple Locations',
    type: 'Internship',
    level: 'Entry',
    description: 'Join our research team for a 12-week summer internship program, working on cutting-edge embodied AI projects.',
    requirements: [
      'Currently pursuing PhD in relevant field',
      'Strong background in machine learning or robotics',
      'Programming experience in Python',
      'Previous research experience preferred',
      'Excellent communication skills'
    ],
    responsibilities: [
      'Conduct research under senior scientist mentorship',
      'Implement and experiment with novel algorithms',
      'Present findings to research team',
      'Contribute to publications and open-source projects',
      'Participate in lab meetings and seminars'
    ],
    applyUrl: 'mailto:careers@agibot-research.com?subject=Research Intern Application',
    posted: '2025-01-01'
  }
];

export const companyInfo = {
  name: 'AgiBot Research',
  mission: 'Leading the frontiers of embodied AI with cutting-edge research in robotics, world models, and intelligent agents',
  vision: 'A future where AI agents possess both digital intelligence and physical understanding, enabling them to collaborate with humans and navigate complex real-world environments.',
  founded: '2020',
  locations: ['San Francisco, CA', 'New York, NY', 'Austin, TX', 'Boston, MA'],
  teamSize: '30+',
  publications: '20+',
  robots_num: '1000+',
  patents: '10+',
  funding: '$10M',
  products: '4',
};

export const socialLinks = {
  twitter: 'https://x.com/agibotworld',
  linkedin: 'https://www.linkedin.com/company/agibot/',
  github: 'https://github.com/AgibotTech',
  youtube: 'https://www.youtube.com/@About-AgiBot'
};

export const contact = {
  email: 'business@zhiyuan-robot.com',
};
