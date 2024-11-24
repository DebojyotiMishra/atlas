import Image from 'next/image';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Inter({
    subsets: ['latin'],
    weight: ["400", "600"],
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image src='/logo.svg' height="30" width="30" alt='logo' className='dark:hidden'></Image>
            <Image src='/logo-dark.svg' height="30" width="30" alt='logo' className='hidden dark:block'></Image>
            <p className={cn("font-semibold", font.className)}>Atlas</p>
        </div>
    )
}