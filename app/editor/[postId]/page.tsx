import React from 'react'
import SaveButton from '@/components/blog/savebtn';

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <main className='px-[10px] md:px-[11%] py-[20px] md:py-[30px]'>
            <div className='flex justify-center items-center'>
                 <input type="text" placeholder='Enter Your Title' className='text-5xl font-bold text-center' />
            </div>
            <div className=''>
                // Large Area // render Editor.jsx (using Block Note)
            </div>
            <SaveButton text={`Save`}/>
           
        </main>
    )
}

export default Page;
