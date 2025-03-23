'use client';

import Image from 'next/image';

const About = () => {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-3xl lg:max-w-5xl py-30">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
                    {/* Left side with stacked cards */}
                    <div className="w-full md:w-1/2 h-[400px] relative group">
                        {/* First card */}
                        <div className="absolute top-0 left-0 w-full h-full transform -rotate-1 transition-all duration-300 z-0 group-hover:rotate-0 group-hover:z-10">
                            <Image
                                src="/maltesquare.jpg"
                                alt="Maltes square"
                                fill
                                className="object-cover rounded-lg shadow-xl"
                                priority
                            />
                        </div>
                        {/* Second card */}
                        <div className="absolute top-4 left-4 w-full h-full transform rotate-1 transition-all duration-300 z-10 group-hover:rotate-0 group-hover:z-0">
                            <Image
                                src="/tommysquare.jpg"
                                alt="Tommys square"
                                fill
                                className="object-cover rounded-lg shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right side with information */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl font-bold text-gray-800">Om Mig</h1>
                        <div className="space-y-4 text-gray-600 text-lg">
    <p>
        Jag heter Linus, är 31 år och bor i Arvika. Nyligen avslutade jag min frontendutbildning i Karlstad, där jag fick en stabil grund inom området. 
        Utbildningen innehöll även flera backendkurser, vilket väckte mitt intresse för att bygga helhetslösningar.
        <br />
        <br />
        De tekniker jag trivs bäst med är <span className="text-[#61DAFB]">React</span>, <span className="text-[#3178C6]">TypeScript</span> och <span className="text-[#38B2AC]">Tailwind</span>, ofta i kombination med <span className="text-[#3ECF8E]">Supabase</span>.
        <br />
        <br />
        När jag inte sitter bakom skärmen hittar du mig på Arvika Tennisklubb eller i stadsparken – där jag gärna umgås med mina fem syskonbarn, som jag är en stolt morbror till.
    </p>
</div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;