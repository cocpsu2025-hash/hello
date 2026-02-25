import Image from 'next/image'

// const AboutPage = () => <>About</>

function AboutPage() {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-[8rem] font-bold text-shadow-lg">
                    About
                    <div>
                        <Image src="/cat.jpeg" height={300} width={350} alt="cat" />
                    </div>
                    <button className='text-lg bg-amber-200 px-4 py-2 shadow-lg rounded-4xl'>
                        Join me
                    </button>
                </h1>
            </div>

        </div>
    )
}


export default AboutPage