'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect('/login?error=Could not authenticate user');
  }

  redirect('/portal');
}

export async function updatePassword(formData: FormData) {
  'use server'; // Ensure it runs securely on the backend
  
  const password = formData.get('password') as string;
  const supabase = await createClient();

  // Updates the password for the currently logged-in user
  const { error } = await supabase.auth.updateUser({
    password: password
  });

  if (error) {
    redirect('/update-password?error=Could not update password');
  }

  // Once updated successfully, drop them into their private portal
  redirect('/portal');
}