import React from 'react'
import { Heading2, Paragraph2 } from './Text';
import FeaturesCard from '@/components/blog/FeaturesCard';

function FeatureSection() {
    const features = [
        {
            icon: "/icons/nextjs.png",
            iconDark: "/icons/nextjs-invert.png",
            title: "Next.js 15",
            description: "App Router based project with layouts, routing, loading UI, dynamic routes, API routes, and fully server‑side & client‑side rendering support.",
        },
        {
            icon: "/icons/react.png",
            iconDark: "/icons/react-invert.png",
            title: "React 19",
            description: "Uses modern React features with Server and Client Components along with React hooks for managing states and lifecycle.",
        },
        {
            icon: "/icons/supabase.png",
            iconDark: "/icons/supabase-invert.png",
            title: "Supabase Database",
            description: "Database powered by Supabase (Postgres) along with RLS (disabled in dev for testing ). Includes Supabase Storage for uploading & serving blog cover images and avatars.",
        },
        {
            icon: "/icons/kinde.png",
            iconDark: "/icons/kinde-invert.png",
            title: "Kinde",
            description: "Authentication and session handling with Kinde Auth and middleware‑based route protection. Auth state used on both client & server.",
        },
        {
            icon: "/icons/shadcn.png",
            iconDark: "/icons/shadcn-invert.png",
            title: "Shadcn",
            description: "UI built using shadcn/ui + Radix UI primitives styled with Tailwind CSS. Custom theme system with CSS variables for dark/light mode",
        },
        {
            icon: "/icons/vercel.png",
            iconDark: "/icons/vercel-invert.png",
            title: "Vercel",
            description: "Built for deployment on Vercel (Next.js native), leveraging edge‑ready APIs.",
        },
    ];

    return (
        <main className='bg-[rgb(var(--features))] mt-[50px] md:mt-[100px] md:p-[50px] rounded-lg
        p-[20px]
        '>
            <div className='text-center flex flex-col justify-center items-center gap-3 md:gap-[25px] mb-[30px] md:mb-[50px]'>
                <Heading2 text={`Features`} />
                <Paragraph2 text={`This project is an experiment to see how a modern app, with features like auth, subscriptions, API routes, and static pages would work in Next.js 13 app dir.`} />
            </div>
            {/*Feature Card Sections  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-[5%] text-left mb-[25px]">
                {features.map((f) => (
                    <FeaturesCard
                        key={f.title}
                        icon={f.icon}
                        iconDark={f.iconDark}
                        title={f.title}
                        description={f.description}
                    />
                ))}
            </div>
            <div className='text-center flex flex-col justify-center items-center gap-3 md:gap-[25px] mb-[10px] md:mb-[20px] mt-3 md:mt-[50px] '>
                <Paragraph2 text={`Built with Next.js, React, Supabase, and Kinde Auth, styled using Tailwind + shadcn/ui, and powered by BlockNote Editor.`} />
            </div>



        </main>
    )
}

export default FeatureSection;
