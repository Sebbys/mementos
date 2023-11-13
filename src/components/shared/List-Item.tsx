import Link from 'next/link';
import getFormattedDate from '@/app/lib/getFormattedDate';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { badgeVariants } from '@/components/ui/badge';

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date, tags } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      {/* <li className='text-2xl dark:text-white/90'>
    
        <br />
        <p className='text-sm mt-1'>{formattedDate}</p>
      </li> */}
      <Card className='mb-4'>
        <CardHeader>
          <Link href={`/courses/tags/${tags}/posts/${id}`}>
            <CardTitle className='font-bold dark:hover:text-white'>{title}</CardTitle>
          </Link>
          <CardDescription className={badgeVariants({ variant: 'outline' })}>{tags} Course</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>{formattedDate}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
