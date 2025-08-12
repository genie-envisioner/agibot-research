import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, BookOpen, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';
import PaperCard from '../components/sections/PaperCard';
import Button from '../components/ui/Button';
import Tag from '../components/ui/Tag';
import { papers, years, tags, type PaperTag, type PaperYear } from '../data/research';

const Research: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<PaperYear | 'All'>('All');
  const [selectedTags, setSelectedTags] = useState<PaperTag[]>([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Filter papers based on search, year, tags, and featured status
  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      const matchesSearch = searchQuery === '' || 
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
        paper.venue.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesYear = selectedYear === 'All' || paper.year === selectedYear;
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => paper.tags.includes(tag));
      
      const matchesFeatured = !showFeaturedOnly || paper.featured === true;
      
      return matchesSearch && matchesYear && matchesTags && matchesFeatured;
    });
  }, [searchQuery, selectedYear, selectedTags, showFeaturedOnly]);

  const handleTagToggle = (tag: PaperTag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedYear('All');
    setSelectedTags([]);
    setShowFeaturedOnly(false);
  };

  const featuredPapers = papers.filter(paper => paper.featured);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-[#0A0A0A] to-[#141414]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Research <span className="text-[#53a9de]">Publications</span>
            </h1>
            <p className="text-xl text-[#E0E0E0] max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our latest research in embodied AI, world models, and intelligent systems. 
              Browse through our peer-reviewed publications and cutting-edge research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}>
                <Star size={18} className={showFeaturedOnly ? 'fill-current' : ''} />
                <span className="ml-2">{showFeaturedOnly ? 'Show All' : 'Featured Only'}</span>
              </Button>
              <Button variant="secondary">
                <BookOpen size={18} />
                <span className="ml-2">Google Scholar</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-[#141414] border-b border-[#333333]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#53a9de] mb-2">{papers.length}</div>
                <div className="text-[#888888]">Total Publications</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#53a9de] mb-2">{featuredPapers.length}</div>
                <div className="text-[#888888]">Featured Papers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#53a9de] mb-2">{years.length}</div>
                <div className="text-[#888888]">Active Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#53a9de] mb-2">{tags.length}</div>
                <div className="text-[#888888]">Research Areas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-[#141414] border-b border-[#333333] sticky top-20 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              
              {/* Search Bar */}
              <div className="relative max-w-lg">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#888888]" />
                <input
                  type="text"
                  placeholder="Search papers, authors, or venues..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0A0A0A] border border-[#333333] rounded-lg text-[#E0E0E0] placeholder-[#888888] focus:outline-none focus:border-[#53a9de] focus:ring-2 focus:ring-[#53a9de]/20 transition-all"
                />
              </div>

              {/* Year Filter */}
              <div className="flex items-center space-x-4 flex-wrap">
                <div className="flex items-center space-x-2">
                  <Calendar size={18} className="text-[#888888]" />
                  <span className="text-sm text-[#888888] font-medium">Year:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag
                    variant={selectedYear === 'All' ? 'active' : 'default'}
                    onClick={() => setSelectedYear('All')}
                  >
                    All Years
                  </Tag>
                  {years.map((year) => (
                    <Tag
                      key={year}
                      variant={selectedYear === year ? 'active' : 'default'}
                      onClick={() => setSelectedYear(year)}
                    >
                      {year}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center space-x-2 mt-1">
                  <Filter size={18} className="text-[#888888]" />
                  <span className="text-sm text-[#888888] font-medium">Topics:</span>
                </div>
                <div className="flex flex-wrap gap-2 flex-1">
                  {tags.map((tag) => (
                    <Tag
                      key={tag}
                      variant={selectedTags.includes(tag) ? 'active' : 'default'}
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Results Count and Clear Filters */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#888888]">
                  Showing {filteredPapers.length} of {papers.length} papers
                  {selectedYear !== 'All' && ` from ${selectedYear}`}
                  {selectedTags.length > 0 && ` tagged with ${selectedTags.join(', ')}`}
                  {showFeaturedOnly && ` (featured only)`}
                </span>
                {(searchQuery || selectedYear !== 'All' || selectedTags.length > 0 || showFeaturedOnly) && (
                  <Button variant="text" size="sm" onClick={clearAllFilters}>
                    Clear All Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Papers Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPapers.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-white mb-4">No papers found</h3>
                <p className="text-[#888888] mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button variant="secondary" onClick={clearAllFilters}>
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <>
                {/* Featured Papers */}
                {!showFeaturedOnly && featuredPapers.length > 0 && (
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                      <Star className="mr-3 text-[#53a9de] fill-current" size={24} />
                      Featured Publications
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {featuredPapers.slice(0, 4).map((paper) => (
                        <PaperCard key={paper.id} paper={paper} />
                      ))}
                    </div>
                  </div>
                )}

                {/* All Papers */}
                <div>
                  {!showFeaturedOnly && (
                    <h2 className="text-2xl font-bold text-white mb-8">All Publications</h2>
                  )}
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredPapers.map((paper) => (
                      <PaperCard key={paper.id} paper={paper} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-16 bg-gradient-to-r from-[#53a9de]/10 to-[#3d7fb2]/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Collaborate with Us
            </h2>
            <p className="text-lg text-[#E0E0E0] mb-8">
              Interested in collaborating on cutting-edge embodied AI research? 
              We welcome partnerships with academic institutions and industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                Research Partnerships
              </Button>
              <Button variant="secondary">
                Join Our Team
              </Button>
            </div>
          </div>
        </section> */}
      </div>
    </Layout>
  );
};

export default Research;
