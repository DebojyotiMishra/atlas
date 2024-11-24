import { Logo } from './logo';
import { Button } from '@/components/ui/button';

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50">
            <Logo />
            <div className='md:ml-auto w-full flex items-center gap-x-2 text-muted-foreground justify-between md:justify-end'>
                <Button size='sm' variant='ghost'>Privacy Policy</Button>
                <Button size='sm' variant='ghost'>Terms & Conditions</Button>
            </div>
        </div>
    )
}