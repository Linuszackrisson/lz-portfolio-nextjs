import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-3xl lg:max-w-5xl py-20">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-heading">
                        Kontakt
                    </h2>
                    <p className="text-base md:text-lg text-paragraph max-w-2xl">
                        Låt oss göra världen vackrare tillsammans - en webbsida i taget
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start gap-8 mt-8">
                        <a 
                            href="tel:073-834 66 69" 
                            className="flex items-center gap-4 text-paragraph hover:text-secondary transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                                <FaPhone className="text-xl text-heading" />
                            </div>
                            <span className="text-base md:text-lg font-semibold">073-834 66 69</span>
                        </a>
                        <a 
                            href="mailto:Linus.g.zackrisson@gmail.com" 
                            className="flex items-center gap-4 text-paragraph hover:text-secondary transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                                <MdEmail className="text-xl text-heading" />
                            </div>
                            <span className="text-base md:text-lg font-semibold">Linus.g.zackrisson@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 