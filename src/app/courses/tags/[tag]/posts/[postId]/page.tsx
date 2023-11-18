export const dynamic = 'force-dynamic';
import getFormattedDate from '@/app/lib/getFormattedDate';
import { getPostsMeta, getPostByName } from '@/app/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import 'highlight.js/styles/github-dark.css';
import Comment from '@/components/shared/Comments';
export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); //deduped!
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/courses/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <div className='max-w-xl flex justify-center'>
        <div>
          <h2 className='text-3xl mt-4 mb-0'>{meta.title}</h2>
          <p className='text-sm'>{pubDate}</p>
          <article>{content}</article>
          <section>
            <h3>Related:</h3>
            <div className='flex flex-row gap-4'>{tags}</div>
          </section>
          <p className='mb-10'>
            <Link href={`/courses/`}>← Back </Link>
          </p>
        </div>
      </div>
      {/* <Comment /> */}
    </>
  );
}
