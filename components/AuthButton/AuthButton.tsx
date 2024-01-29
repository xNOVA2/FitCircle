import Image from 'next/image';
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react';

const AuthButton:React.FC<ButtonProps> =({onClick,text,isLoading}) => {
  return (
    <Button className="bg-ButtonBlue py-6  rounded-xl mt-10  w-72" onClick={onClick} type='submit'>
   {isLoading? <div className='flex items-center space-x-3'><Loader2 size={20} className='animate-spin mx-2'/> Processing...</div> : text}
  </Button>
  )
}

export default AuthButton

interface ButtonProps{
    onClick?: () => void;
    text:string
    isLoading?:boolean
}