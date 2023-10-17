'use client';

import { useForm } from 'react-hook-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { type CurrentUser } from '@/app/types';
import { Badge } from '@/components/ui/badge';

export default function SettingsForm({ currentUser }: { currentUser: CurrentUser }) {
  const form = useForm({
    values: {
      name: currentUser.name,
      email: currentUser.email,
      shortBio: currentUser.shortBio,
      image: currentUser.image,
      role: currentUser.roles,
    },
  });

  return (
    <Form {...form}>
      <form className='max-w-2xl space-y-8 '>
        <FormField
          name='image'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Picture</FormLabel>
              <FormControl>
                <Avatar className='group relative h-28 w-28 rounded-full'>
                  <AvatarImage src={field.value} alt={form.getValues().name} />
                  <AvatarFallback className=' text-xs '>{form.getValues().name}</AvatarFallback>
                </Avatar>
              </FormControl>
              <FormDescription>We Only have one developer, please wait for the other features 🙏🏻</FormDescription>
            </FormItem>
          )}></FormField>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input readOnly placeholder='Your name' className='bg-muted' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input readOnly className='bg-muted' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Badge>{currentUser.roles}</Badge>
      </form>
    </Form>
  );
}
