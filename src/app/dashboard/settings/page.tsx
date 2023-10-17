import { type Metadata } from 'next';
import { getUser } from '@/app/server/user';
import { type CurrentUser } from '@/app/types';
import SettingsForm from './settings-form';
import { redirect } from 'next/navigation';
export const metadata: Metadata = {
  title: 'Settings',
};

export default async function Settings() {
  const currentUser = (await getUser()) as CurrentUser;
  if (!currentUser) {
    redirect('/');
  }
  return <SettingsForm currentUser={currentUser} />;
}
