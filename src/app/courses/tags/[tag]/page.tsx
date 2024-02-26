export const dynamic = 'force-static';
import { getPostsMeta } from '@/app/lib/posts';
import ListItem from '@/components/shared/List-Item';
import Link from 'next/link';
import { getUser } from '@/app/server/user';
import { redirect } from 'next/navigation';

export const revalidate = 1000;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());
  // console.log(tags, '\n', posts);

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const user = await getUser();
  if (!user) {
    redirect('/cursed');
  } else if (user?.roles == 'PUBLIC') {
    redirect('/cursed');
  }

  const posts = await getPostsMeta(); //deduped!
  if (!posts) return <p className='mt-10 text-center'>Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags && post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry, no posts for that keyword.</p>
        <Link href='/'>Back to Home</Link>
      </div>
    );
  }

  return (
    <section>
      <h2 className='mt-4 text-3xl text-center'>Welcome to {tag} Courses 🖐🏻</h2>
      <div className='grid grid-cols-2 justify-center gap-4 '>
        {tagPosts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
