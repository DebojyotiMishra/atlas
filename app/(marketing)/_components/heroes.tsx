import Image from 'next/image';

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    <Image src="/documents.png" fill className='object-contain' alt='picture of man with documents'>
                    </Image>
                </div>
                <div className='relative w-[400px] h-[300px] hidden md:block' >
                    <Image fill src="/reading.png" alt='Woman reading'></Image>
                </div>
            </div>
        </div>
    )
}

export default Heroes;