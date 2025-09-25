"use client";
import { Command, EqualApproximately } from 'lucide-react';
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { outfit } from './fonts';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { use } from 'react';
import clsx from 'clsx';
export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className='px-[10px] md:px-[11%] py-[20px] md:py-[30px] '>
            <nav className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-[30px] '>
                    <div className='flex items-center gap-2 md:gap-3'>
                        <Command className="h-[30px] w-[30px" />
                        <p className='text-[20px] md:text-[23px] font-[900]' style={outfit.style}>inkWire</p>
                    </div>
                    <ul className='hidden md:flex items-center md:gap-3 text-slate-500 font-[400] text-sm md:text-[15px]'>
                        <li className='inline-block mr-4 hover:text-slate-700'><Link href="/">Features</Link></li>
                        <li className='inline-block mr-4 hover:text-slate-700'><Link href="/about">About</Link></li>
                        <li className='inline-block mr-4 hover:text-slate-700'><Link href="/blogs">Blogs</Link></li>

                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <Button className='px-[20px] bg-slate-100 text-slate-700 hover:bg-slate-200'><LoginLink>Login</LoginLink></Button>
                </div>

            </nav>
            <div className='flex justify-center items-center mt-[10px]'>
                <div className="breadcrumbs text-sm md:hidden">
                    <ul className='text-slate-700'>
                        <li><Link className={clsx(
                            "text-gray-500 hover:text-gray-600 transition",
                            pathname === "/" && "font-semibold text-gray-600"
                        )} href={`/`}>Home</Link></li>
                        <li><Link className={clsx(
                            "text-gray-500 hover:text-gray-600 transition",
                            pathname === "/about" && "font-semibold text-gray-600"
                        )} href={`/about`}>About</Link></li>
                        <li><Link className={clsx(
                            "text-gray-500 hover:text-gray-600 transition",
                            pathname === "/blogs" && "font-semibold text-gray-600"
                        )} href={'/blogs'}>Blogs</Link></li>
                    </ul>
                </div>
            </div>

        </div>

    );
}