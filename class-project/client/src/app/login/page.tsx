import LoginForm from "@/components/auth/login-form"
import Link from "next/link"

const Page = () => {
    return (
        <div className=' h-full w-full  flex justify-center items-center '>
            <div className="flex flex-col md:items-center px-3 sm:px-14 py-10 w-full md:w-fit  md:border md:border-gray-600   rounded-md">
                <h1 className="text-2xl font-bold  text-center tracking-widest mb-4">Login </h1>
                <LoginForm />
                <div className='mt-4 tracking-wider'>
                    <p>Don&apos;t have an account? <Link href='/sign-up'><span className="text-blue-600 font-semibold">Register</span></Link></p>
                </div>
            </div>
        </div>
    )
}

export default Page