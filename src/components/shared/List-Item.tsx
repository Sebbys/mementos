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
    <div className='max-w-md'>
      <Card>
        <CardHeader>
          <Link className='no-underline text-2xl' href={`/courses/tags/${tags}/posts/${id}`}>
            {title}
          </Link>
          <CardDescription className={badgeVariants({ variant: 'outline' })}>{tags} Course</CardDescription>
        </CardHeader>
        <CardFooter className='m-0'>
          <p>{formattedDate}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
