import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import ReactMarkdown from 'react-markdown';

async function getSinglePost(slug: string) {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const apiKey = process.env.NOTION_API_KEY;
  
  if (!databaseId || !apiKey) throw new Error("Missing Notion API Keys");

  // 1. USE NATIVE FETCH TO FIND THE PAGE (Bypasses the Next.js SDK bug!)
  const searchRes = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    }),
    next: { revalidate: 60 }
  });

  if (!searchRes.ok) {
    console.error("Failed to fetch from Notion");
    return null;
  }

  const searchData = await searchRes.json();
  
  // If no article matches the slug, return null
  if (!searchData.results || searchData.results.length === 0) return null;
  
  const page: any = searchData.results[0];

  // 2. Only use the SDK for the Markdown conversion
  const notion = new Client({ auth: apiKey });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return {
    title: page.properties.Name?.title[0]?.plain_text || 'Untitled',
    date: page.properties.Date?.date?.start || 'No Date',
    coverImage: page.properties.Cover?.files[0]?.file?.url || page.properties.Cover?.files[0]?.external?.url || 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200',
    content: mdString.parent || '', 
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const safeSlug = resolvedParams.slug || "";
  
  const post = await getSinglePost(safeSlug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-serif text-slate-900 mb-4">Article not found</h2>
        <p className="text-slate-500 mb-8">It looks like this article doesn't exist or isn't published yet.</p>
        <Link href="/blog" className="bg-emerald-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-900 transition-colors">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-[#FCFDFD] min-h-screen font-sans pb-24">
      <header className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <Image src={post.coverImage} alt={post.title} fill priority className="object-cover brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight text-white drop-shadow-md">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200">
            <span>By Sandhya Narayan</span>
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
            <span className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0px_8px_30px_rgba(0,0,0,0.04)] border border-slate-100">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-emerald-700 transition-colors mb-10">
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          {/* This renders the beautifully formatted Notion markdown! */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <hr className="my-12 border-slate-100" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-emerald-100 flex items-center justify-center text-emerald-800 font-serif text-xl font-bold">
                  SJ
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Sandhya Narayan</p>
                <p className="text-xs text-slate-500">Counseling Psychologist</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 px-4 py-2 rounded-full transition-colors border border-slate-100">
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}