import React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Heading, { Paragraph } from "@/components/blog/Text"

interface Props {}

function HeroSection(props: Props) {
  const {} = props

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* Badge */}
      <Badge
        className="cursor-pointer md:mt-[5%] mt-[0px] px-[15px] py-1 
                   rounded-2xl text-[12px] md:text-[14px] font-[500]
                   bg-[rgb(var(--badge))] text-[rgb(var(--card-foreground))] 
                   "
      >
        <Link href="https://x.com/WASIMAKHTA48368" target="_blank">
          Follow along on X (Twitter)
        </Link>
      </Badge>

      {/* Text */}
      <Heading text={`An example social app built using Next.js 13 server components.`} />
      <Paragraph
        text={`This is a Blog Application that uses Next.js 13 latest features and components. Feel free to fork and play around.`}
      />

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {/* Primary CTA Button: Black / White */}
        <Button
          className="text-[14px] p-[20px] px-[30px] font-semibold 
            bg-[rgb(var(--black))] 
            text-[rgb(var(--white))]  
            hover:bg-[rgb(var(--black-hover))]
          "
                     
        >
          <Link href={`/blogs`}>Get Started</Link>
        </Button>

        {/* Secondary Button: Subtle with border */}
        <Button
          className="text-[14px] p-[20px] px-[28px] 
                     bg-[rgb(var(--card))] text-[rgb(var(--card-foreground))] 
                     border border-[rgb(var(--border))] 
                     hover:bg-[rgb(var(--secondary))] 
                     hover:text-[rgb(var(--foreground))]"
        >
          <Link href={`https://github.com/wasim2451/Next-Blog-XZ`} target="_blank">
            Github
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection