import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blog';

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-page">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Découvrez nos articles sur le développement, la technologie et les bonnes pratiques.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher un article..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container-page">
            <div className="card overflow-hidden card-hover cursor-pointer" onClick={() => navigate(`/blog/${featuredPost.id}`)}>
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
                      À la une
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-neutral-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold">
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-neutral-50">
        <div className="container-page">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
              Articles récents
            </h2>
            <p className="text-neutral-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} trouvé{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>

          {otherPosts.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 mx-auto mb-4 text-neutral-300" />
              <p className="text-lg text-neutral-600">Aucun article trouvé</p>
              <p className="text-sm text-neutral-500 mt-2">Essayez avec d'autres critères de recherche</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <article
                  key={post.id}
                  className="card card-hover cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-neutral-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-neutral-100 text-neutral-600 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-600">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Restez informé
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-primary-300"
            />
            <button className="px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold hover:bg-primary-50 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}