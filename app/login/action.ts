'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(name: string, email: string, password: string) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
    options:{
      data: {
        display_name: name,
      }
    }
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    redirect('/error')
  }

  revalidatePath('/user', 'layout')
  redirect('/user')
}

export async function signout() {
  const supabase = await createClient();
  const {error} = await supabase.auth.signOut();
  if(error){
    console.log(error);
    redirect('/error');
  }
  revalidatePath('/', 'layout');
  redirect('/');
}