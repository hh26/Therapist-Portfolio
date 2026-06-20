import React from 'react';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import LoginForm from './LoginForm';

export default async function LoginPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    redirect('/portal');
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans px-6">
      <LoginForm />
    </div>
  );
}