import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

async function getPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const apiKey = process.env.NOTION_API_KEY;
  
  if (!databaseId || !apiKey) {
    console.error("Missing API Keys in .env.local");
    return [];
  }

  // Use raw native fetch to bypass any Next.js SDK bundling issues!
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    }),
    // This tells Next.js to re-check Notion for new articles every 60 seconds
    next: { revalidate: 60 } 
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Notion API Error:", errorData);
    return [];
  }

  const data = await response.json();

  return data.results.map((page: any) => {
    return {
      id: page.id,
      title: page.properties.Name?.title[0]?.plain_text || 'Untitled',
      slug: page.properties.Slug?.rich_text[0]?.plain_text || page.id,
      date: page.properties.Date?.date?.start || 'No Date',
      coverImage: page.properties.Cover?.files[0]?.file?.url || page.properties.Cover?.files[0]?.external?.url || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000',
    };
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <section className="bg-slate-100 py-16 md:py-24 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Journal & Insights</h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
            Reflections, mental health resources, and practical tools to support your ongoing journey of growth and healing.
          </p>
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No published articles found. Check your Notion database!
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image 
                  src={post.coverImage} 
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4 uppercase tracking-wide">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-slate-900 mb-6 group-hover:text-emerald-700 transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:translate-x-1 transition-transform w-fit">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}