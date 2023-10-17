import { type Metadata } from 'next';
import { getUser } from '@/app/server/user';
import { type CurrentUser } from '@/app/types';
import SettingsForm from './settings-form';

export const metadata: Metadata = {
  title: 'Settings',
};

export default async function Settings() {
  const currentUser = (await getUser()) as CurrentUser;
  return <SettingsForm currentUser={currentUser} />;
}
