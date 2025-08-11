import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ModelCard from '../components/sections/ModelCard';
import Button from '../components/ui/Button';
import Tag from '../components/ui/Tag';
import { models, categories, type ModelCategory } from '../data/models';

const Models: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ModelCategory>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter models based on search and category
  const filteredModels = useMemo(() => {
    return models.filter((model) => {
      const matchesSearch = searchQuery === '' || 
        model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || model.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Open Source <span className="text-[#53a9de]">Models</span>
            </h1>
            <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our collection of state-of-the-art models for embodied AI research. 
              All models are open source and ready for research and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={() => window.open('https://github.com/agi-bot', '_blank')}>
                Browse on GitHub
              </Button>
              <Button variant="secondary" onClick={() => window.open('https://huggingface.co/agibot', '_blank')}>
                View on Hugging Face
              </Button>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-[#141414] border-b border-[#333333] sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#888888]" />
                <input
                  type="text"
                  placeholder="Search models, features, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#E0E0E0] placeholder-[#888888] focus:outline-none focus:border-[#53a9de] focus:ring-2 focus:ring-[#53a9de]/20 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2 flex-wrap">
                <Filter size={18} className="text-[#888888]" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Tag
                      key={category}
                      variant={selectedCategory === category ? 'active' : 'default'}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-[#0A0A0A] rounded-lg p-1 border border-[#333333]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#53a9de] text-white' : 'text-[#888888] hover:text-[#53a9de]'} transition-colors`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#53a9de] text-white' : 'text-[#888888] hover:text-[#53a9de]'} transition-colors`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-[#888888]">
              Showing {filteredModels.length} of {models.length} models
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </div>
          </div>
        </section>

        {/* Models Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredModels.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No models found</h3>
                <p className="text-[#888888] mb-6">
                  {searchQuery || selectedCategory !== 'All'
                    ? 'Try adjusting your search or filter criteria'
                    : 'No models are available at the moment'
                  }
                </p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1 max-w-4xl mx-auto'
              }`}>
                {filteredModels.map((model) => (
                  <ModelCard key={model.id} model={model} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#53a9de]/10 to-[#3d7fb2]/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build with Our Models?
            </h2>
            <p className="text-lg text-[#E0E0E0] mb-8">
              Join our community of researchers and developers building the future of embodied AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.open('https://github.com/agi-bot', '_blank')}>
                Start Building
              </Button>
              <Button variant="secondary">
                Join Community
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Models;
