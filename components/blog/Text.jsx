import React from 'react'
import { outfit } from "@/components/blog/fonts";
function Heading(props) {
    return (
        <h1 className="font-[700] md:font-[600] md:text-7xl md:px-[12%] text-3xl px-[10px] " style={outfit.style}>{props.text}</h1>
    )
}

export default Heading;
//An example social app built using Next.js 13 server components.

export const Paragraph= (props) => {
    return (
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-slate-500">{props.text}</p>
    )
}
//This is a Blog Application that uses Next.js 13 latest features and components. Feel free to fork and play around .

export function Heading2(props) {
    return (
        <h1 className="font-[700] md:font-[600] md:text-6xl md:px-[12%] text-2xl px-[10px] " style={outfit.style}>{props.text}</h1>
    )
}

//paragraph 2
export const Paragraph2= (props) => {
    return (
        <p className="max-w-[43rem] text-[14px] text-slate-500 md:text-[18px] text-center">{props.text}</p>
    )
}
