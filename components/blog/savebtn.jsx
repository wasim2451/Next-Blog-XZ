import { Button } from '@/components/ui/button';
const SaveButton=(props)=>{
    return<>
        <Button className='bg-black text-[15px] text-white px-[20px] py-[10px] rounded-[5px] hover:bg-black cursor-pointer'>{props.text}</Button>
    </>
}
export default SaveButton;