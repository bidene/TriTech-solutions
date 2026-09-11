import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Heart, Bookmark } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import SEO from '@/components/SEO';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === id);
  const relatedPosts = blogPosts.filter(p => p.id !== id && p.category === post?.category).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-neutral-900 mb-4">
            Article non trouvé
          </h1>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        image={post.image}
      />
      {/* Header */}
      <header className="pt-32 pb-8 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container-page">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </button>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white text-neutral-700 text-xs font-semibold border border-neutral-200">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-neutral-900">{post.author}</p>
                <p className="text-xs text-neutral-500">Auteur</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16">
        <div className="container-page max-w-4xl">
          {/* Featured Image */}
          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Actions */}
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors" title="Partager">
                <Share2 className="w-5 h-5 text-neutral-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors" title="J'aime">
                <Heart className="w-5 h-5 text-neutral-600" />
              </button>
              <button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors" title="Sauvegarder">
                <Bookmark className="w-5 h-5 text-neutral-600" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-code:bg-neutral-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-neutral-900 prose-pre:text-neutral-100"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm font-semibold text-neutral-900 mb-4">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-700 text-sm font-medium hover:bg-neutral-200 transition-colors cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="container-page max-w-4xl">
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-8">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="card card-hover cursor-pointer overflow-hidden"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  <div className="relative h-40">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-bold text-neutral-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <Clock className="w-3 h-3" />
                      {relatedPost.readTime}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Besoin d'aide pour votre projet ?
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Notre équipe d'experts est prête à vous accompagner dans la réalisation de vos projets technologiques.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 rounded-xl bg-white text-primary-600 font-bold hover:bg-primary-50 transition-colors"
          >
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}