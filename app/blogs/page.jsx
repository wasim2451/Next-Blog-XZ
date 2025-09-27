import React from 'react'
import { Paragraph } from '@/components/blog/Text';
import { supabase } from '@/lib/supabase/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
import Card from './../../components/blog/card';

async function Page() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const { data, error } = await supabase  .from('posts').select()
    if(data){
        console.log(data);
        //It returns a Array of id , created_at , title and content and author
    }else{
        throw new Error(error);
    }
    return (
        <main className='px-[10px] md:px-[20%] py-[20px] md:py-[20px] text-left '>
            <div className='border-b-[1px] border-slate-300 pb-[25px] md:pb-[28px]'>
                <h1 className='inline-block text-3xl tracking-tight font-[700] lg:text-5xl mb-2 md:mb-4'>Blog</h1>
                <Paragraph text={`Enjoy our users posts and experience. Share and contribute.`}/>
            </div>
            <Card/>

        </main>
    )
}

export default Page
