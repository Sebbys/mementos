import { redirect } from 'next/navigation';
import { getUser } from '../server/user';
export default async function Courses() {
  const currentUser = await getUser();
  if (!currentUser || currentUser?.roles === 'PUBLIC') {
    redirect('/');
  }
  return <div>This is Courses Pages</div>;
}
