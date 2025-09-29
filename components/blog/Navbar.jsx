"use client";
import { Command } from 'lucide-react';
import Link from "next/link";
import { LoginLink, LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { outfit } from './fonts';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ModeToggle from '../ui/modeToggle';

export default function Navbar() {
    const pathname = usePathname();
    const { isAuthenticated, getUser } = useKindeBrowserClient();
    const { user } = getUser;
    console.log(user);

    return (
        <div className="px-[10px] md:px-[11%] pt-[20px] md:py-[30px]">
            <nav className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-[30px]">
                    <div className="flex items-center gap-2 md:gap-3">
                        <Command className="h-[30px] w-[30px]" />
                        <p className="text-[18px] md:text-[20px] font-[700]" style={outfit.style}>inkWire</p>
                    </div>
                    <ul className="hidden md:flex items-center md:gap-3 text-[rgb(var(--foreground))]/70 font-[400] text-sm md:text-[15px]">
                        <li className="inline-block mr-4 hover:text-[rgb(var(--foreground))]"><Link href="/" prefetch={true}>Home</Link></li>
                        <li className="inline-block mr-4 hover:text-[rgb(var(--foreground))]"><Link href="https://s3.us-east-1.amazonaws.com/bucket.wasim.portfolio/index.html" prefetch={true}>About</Link></li>
                        <li className="inline-block mr-4 hover:text-[rgb(var(--foreground))]"><Link href="/blogs" prefetch={true}>Blogs</Link></li>
                        {isAuthenticated ? (
                            <li className="inline-block mr-4 hover:text-[rgb(var(--foreground))]">
                                <Link href="/dashboard/userDashboard">Dashboard</Link>
                            </li>
                        ) : null}
                    </ul>
                </div>

                {isAuthenticated ? (
                    <div className="flex justify-center items-center gap-2">
                        <ModeToggle />
                        <Button className="px-[20px] bg-[rgb(var(--card2))] text-[rgb(var(--card-foreground))]  hover:bg-[rgb(var(--secondary))]">
                            <LogoutLink>Logout</LogoutLink>
                        </Button>
                    </div>
                ) : (
                    <div className="flex justify-center items-center gap-2">
                        <ModeToggle />
                        <Button className="px-[20px] bg-[rgb(var(--card2))] text-[rgb(var(--card-foreground))]  hover:bg-[rgb(var(--secondary))]">
                            <LoginLink>Login</LoginLink>
                        </Button>
                    </div>
                )}
            </nav>

            {/* mobile menu */}
            <div className="flex justify-center items-center mt-[10px]">
                <div className="text-sm md:hidden">
                    <ul className="flex justify-center items-center gap-5 text-[13px] text-[rgb(var(--foreground))]">
                        <li>
                            <Link
                                className={clsx(
                                    "text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition",
                                    pathname === "/" && "font-semibold text-[rgb(var(--foreground))]"
                                )}
                                href={`/`}
                                prefetch={true}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={clsx(
                                    "text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition",
                                    pathname === "/about" && "font-semibold text-[rgb(var(--foreground))]"
                                )}
                                href={`https://s3.us-east-1.amazonaws.com/bucket.wasim.portfolio/index.html`}
                                prefetch={true}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={clsx(
                                    "text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition",
                                    pathname === "/blogs" && "font-semibold text-[rgb(var(--foreground))]"
                                )}
                                href={'/blogs'}
                                prefetch={true}
                            >
                                Blogs
                            </Link>
                        </li>
                        {isAuthenticated ? (
                            <li>
                                <Link
                                    className={clsx(
                                        "text-[rgb(var(--foreground))]/70 hover:text-[rgb(var(--foreground))] transition",
                                        pathname === "/dashboard/userDashboard" && "font-semibold text-[rgb(var(--foreground))]"
                                    )}
                                    href={'/dashboard/userDashboard'}
                                    prefetch={true}
                                >
                                    Dashboard
                                </Link>
                            </li>
                        ) : null}
                    </ul>
                </div>
            </div>
        </div>
    );
}