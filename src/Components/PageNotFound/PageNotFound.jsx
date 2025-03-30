import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';


const PageNotFound = () => {
  return (
    <div className='min-h-screen text-white flex flex-col justify-center items-center text-8xl'>
      <h1>404 Page Not found</h1>  
      <Link to="/" className='text-lg mt-10 bg-gray-100 px-3 py-2 text-black rounded-full flex items-center gap-x-3'> <ArrowLeft className='mt-0.5'/> Back To Home page</Link>
    </div>
  )
}

export default PageNotFound;