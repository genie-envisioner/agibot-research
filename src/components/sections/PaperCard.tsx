import React, { useState } from 'react';
import { ExternalLink, Github, FileText, Video, Calendar, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import { Paper } from '../../data/research';

interface PaperCardProps {
  paper: Paper;
}

const PaperCard: React.FC<PaperCardProps> = ({ paper }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    'Published': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Under Review': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Preprint': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };

  return (
    <Card className="group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {paper.featured && (
            <div className="flex items-center space-x-1 text-[#53a9de] mb-2">
              <Star size={16} className="fill-current" />
              <span className="text-sm font-medium">Featured</span>
            </div>
          )}
          <h3 className="text-xl font-bold text-white group-hover:text-[#53a9de] transition-colors leading-tight">
            {paper.title}
          </h3>
        </div>
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border backdrop-blur-sm ml-4 ${statusColors[paper.status]}`}>
          <span className="text-xs font-medium">{paper.status}</span>
        </div>
      </div>

      {/* Authors and Venue */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 text-sm text-[#E0E0E0] mb-2">
          <Users size={14} />
          <span>{paper.authors.join(', ')}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-[#888888]">
          <span className="font-medium text-[#53a9de]">{paper.venue}</span>
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{paper.year}</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {paper.tags.slice(0, 4).map((tag) => (
          <Tag key={tag} size="sm">
            {tag}
          </Tag>
        ))}
        {paper.tags.length > 4 && (
          <Tag size="sm">+{paper.tags.length - 4}</Tag>
        )}
      </div>

      {/* Abstract */}
      <div className="mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left mb-3 text-white font-medium hover:text-[#53a9de] transition-colors"
        >
          <span>Abstract</span>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        <p className={`text-[#E0E0E0] text-sm leading-relaxed transition-all duration-300 ${
          isExpanded ? 'opacity-100' : 'opacity-75 line-clamp-3'
        }`}>
          {paper.abstract}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {paper.pdfUrl && (
            <Button
              size="sm"
              onClick={() => window.open(paper.pdfUrl, '_blank')}
            >
              <FileText size={16} className="mr-2" />
              PDF
            </Button>
          )}
          {paper.codeUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(paper.codeUrl, '_blank')}
            >
              <Github size={16} className="mr-2" />
              Code
            </Button>
          )}
          {paper.projectUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(paper.projectUrl, '_blank')}
            >
              <ExternalLink size={16} className="mr-2" />
              Project
            </Button>
          )}
          {paper.videoUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(paper.videoUrl, '_blank')}
            >
              <Video size={16} className="mr-2" />
              Video
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PaperCard;
