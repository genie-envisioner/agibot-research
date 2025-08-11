import React from 'react';
import { ExternalLink, Github, FileText, Play, Calendar, Shield } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import { Model } from '../../data/models';

interface ModelCardProps {
  model: Model;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  const statusColors = {
    'Stable': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Beta': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Experimental': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
  };

  const statusIcons = {
    'Stable': Shield,
    'Beta': Play,
    'Experimental': FileText
  };

  const StatusIcon = statusIcons[model.status];

  return (
    <Card className="h-full flex flex-col group">
      {/* Header with Image */}
      <div className="relative mb-6">
        <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[#53a9de]/20 to-[#3d7fb2]/20">
          <img
            src={model.image}
            alt={model.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Status Badge */}
        <div className={`absolute top-3 right-3 flex items-center space-x-1 px-2 py-1 rounded-full border backdrop-blur-sm ${statusColors[model.status]}`}>
          <StatusIcon size={12} />
          <span className="text-xs font-medium">{model.status}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#53a9de] transition-colors">
              {model.name}
            </h3>
            <Tag size="sm" variant="active">{model.category}</Tag>
          </div>
          <p className="text-[#E0E0E0] text-sm leading-relaxed">
            {model.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {model.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} size="sm">
              {tag}
            </Tag>
          ))}
          {model.tags.length > 3 && (
            <Tag size="sm">+{model.tags.length - 3}</Tag>
          )}
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
          <ul className="space-y-2">
            {model.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-[#E0E0E0]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#53a9de] mt-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        {model.metrics && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">Performance</h4>
            <div className="grid grid-cols-3 gap-3">
              {model.metrics.slice(0, 3).map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-[#53a9de]">{metric.value}</div>
                  <div className="text-xs text-[#888888]">{metric.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Release Date */}
        <div className="flex items-center space-x-2 text-sm text-[#888888] mb-6">
          <Calendar size={14} />
          <span>Released {new Date(model.releaseDate).toLocaleDateString()}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto space-y-3">
          <div className="flex space-x-2">
            <Button
              size="sm"
              className="flex-1"
              onClick={() => window.open(model.githubUrl, '_blank')}
            >
              <Github size={16} className="mr-2" />
              GitHub
            </Button>
            {model.huggingfaceUrl && (
              <Button
                variant="secondary"
                size="sm"
                className="flex-1"
                onClick={() => window.open(model.huggingfaceUrl, '_blank')}
              >
                🤗 HF
              </Button>
            )}
          </div>
          
          <div className="flex space-x-2">
            {model.paperUrl && (
              <Button
                variant="text"
                size="sm"
                className="flex-1 justify-center"
                onClick={() => window.open(model.paperUrl, '_blank')}
              >
                <FileText size={14} className="mr-1" />
                Paper
              </Button>
            )}
            {model.demoUrl && (
              <Button
                variant="text"
                size="sm"
                className="flex-1 justify-center"
                onClick={() => window.open(model.demoUrl, '_blank')}
              >
                <ExternalLink size={14} className="mr-1" />
                Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ModelCard;
