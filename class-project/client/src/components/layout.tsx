
'use client'
import React from 'react'
import Header from './header';
import { usePathname } from 'next/navigation'
interface IProps {
    children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
    const pathName = usePathname()
    const hideNav = pathName === '/login' || pathName === '/sign-up'
    return (
        <div className='h-full w-full'>
            {!hideNav && <div>
                <Header />
            </div>}
            <div>
                {children}
            </div>
            {/* footer */}

        </div>
    )
}

export default Layout