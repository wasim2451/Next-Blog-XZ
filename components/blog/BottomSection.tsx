import React from 'react'
import { Heading2, Paragraph2 } from '@/components/blog/Text'
interface Props { }

function BottomSection(props: Props) {
    const { } = props

    return (
        <main className='mt-[20px] md:mt-[70px] px-[10px] md:px-[11%] pt-[20px] md:py-[30px]'>
            <div className='flex  flex-col justify-center items-center md:gap-[5vh] gap-3'>
                <Heading2 text={`Proudly Open Source`} />
                <Paragraph2 text={`inkWire is open source and powered by open source software.         
                The code is available on GitHub.`} />
            </div>
        </main>
    )
}

export default BottomSection;
