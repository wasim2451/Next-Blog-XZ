
import Heading, { Paragraph } from "@/components/blog/Text";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { outfit } from "@/components/blog/fonts";
import { supabase } from "@/lib/supabase/client";

export async function Dashboard() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
        // Not AUthenticated 
        redirect('/');
    }
    const user = await getUser();
    const user_object = {
        name: `${user?.given_name} ${user?.family_name}`,
        email: `${user?.email}`,
        avatar_url: `${user?.picture}`
    }
    //Get Blogs from DB 
     



    //UserInfo Component
    const UserInfo=()=>{
        return <>
            <div className="flex justify-center items-center gap-3 md:pt-[20px] pt-[10px]">
                <Image className="rounded-full" src={user_object.avatar_url} alt="User Image" width={40} height={40} priority></Image>
                <p className="text-[15px] font-bold tracking-wider" style={outfit.style}>{user_object.name}</p>
            </div>
            
        </>
    }

    //Users Blog component

    console.log(user);
    return <>
        <div className="px-[10px] md:px-[11%] py-[20px] md:py-[30px] ">
            <div className="flex flex-col md:gap-3 items-center justify-center gap-2 text-center">
                <Heading text={`Dashboard of ${user?.given_name}`} />
                <Paragraph text={`Write your knowledge and feelings and let the world know about it .`} />
                <Button className=" mt-[20px] bg-white border-[2px] border-slate-800 text-black font-extrabold text-[14px] p-[20px] px-[30px] hover:bg-white hover:border-slate-400 "><Link href={`/editor/${user?.id}`}>Write a Blog</Link></Button>
                <UserInfo/>
            </div>
            <hr  className="border-slate-200 border-[1px] rounded-4xl md:mt-[20px] mt-[10px] mx-[20%]"/>
            

        </div>
    </>
}
export default Dashboard;