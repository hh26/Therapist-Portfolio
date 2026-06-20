import React from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import UpdateForm from './UpdateForm';

export default async function UpdatePasswordPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // If someone tries to visit this URL randomly without clicking an email link, 
  // the server will kick them to the login page immediately.
  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans px-6">
      <UpdateForm />
    </div>
  );
}