import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Heading, { Paragraph } from "@/components/blog/Text";
interface Props {}

function HeroSection(props: Props) {
    const {} = props

    return (
         <div className="flex flex-col justify-center items-center gap-5">
                <Badge className="cursor-pointer md:mt-[5%] mt-[0px] px-[15px] py-1 text-slate-800 bg-slate-100 rounded-2xl  text-[12px] md:text-[14px] font-[500]"> <Link href={`https://x.com/WASIMAKHTA48368`} target="_blank">Follow along on X (Twitter)</Link></Badge>
                <Heading text={`An example social app built using Next.js 13 server components.`} />
                <Paragraph text={`This is a Blog Application that uses Next.js 13 latest features and components. Feel free to fork and play around .`}/>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <Button className="bg-black text-white font-semibold text-[14px] p-[22px] px-[30px] hover:bg-slate-800"><Link href={`/blogs`}>Get Started</Link></Button>
                    <Button className=" bg-white border-[0.5px] border-slate-200 text-black text-[14px] p-[20px] px-[28px] hover:bg-slate-100"><Link href={'https://github.com/wasim2451/Next-Blog-XZ'} target="_blank">Github</Link></Button>
                </div>
            </div>
    )
}

export default HeroSection
