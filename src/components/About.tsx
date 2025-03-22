import Image from 'next/image';

const About = () => {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-3xl lg:max-w-5xl py-20">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
                    {/* Left side with overlapping images */}
                    <div className="relative w-full md:w-1/2 h-[400px]">
                        <div className="absolute top-0 left-0 w-[300px] h-[300px] z-10">
                            <Image
                                src="/maltesquare.jpg"
                                alt="Maltes square"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] z-0">
                            <Image
                                src="/tommysquare.jpg"
                                alt="Tommys square"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Right side with information */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl font-bold text-gray-800">Om Mig</h1>
                        <div className="space-y-4 text-gray-600 text-lg">
                            <p>
                            Jag heter Linus, är 31 år och bor i Arvika. För närvarande studerar jag Frontendutveckling i Karlstad. Med min tekniska expertis och kreativa synvinkel trivs jag redan nu med att omvandla designkoncept till fungerande kodbaser.
                            <br />
                            <br />
                            När jag inte kodar, hittar du mig oftast fortfarande bakom skärmen pysslandes med något annat. Men jag spenderar också mycket tid på tennis och njuter av naturen när vädret tillåter.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;