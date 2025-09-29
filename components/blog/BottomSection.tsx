import React from 'react'
import { Heading2, Paragraph2 } from '@/components/blog/Text'
interface Props { }

function BottomSection(props: Props) {
    const { } = props

    return (
        <main className='mt-[20px] md:mt-[70px] px-[10px] md:px-[11%] pt-[20px] md:py-[30px] mb-[3vh]'>
            <div className='flex  flex-col justify-center items-center md:gap-[5vh] gap-3'>
                <Heading2 text={`Proudly Open Source`} />
                <Paragraph2 text={`inkWire is open source and powered by open source software.         
                The code is available on GitHub.`} />
            </div>
            <div className='flex justify-center items-center md:mt-[20px] mt-[10px] italic'>
                    <p className='text-center max-w-[45rem] text-[12px] text-slate-500 md:text-[15px] '>Inspired from ShadCN taxonomy developed for testing Next Js components ...</p>
            </div>
            
        </main>
    )
}

export default BottomSection;
