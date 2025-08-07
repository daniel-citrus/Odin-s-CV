import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const OutputContainer = () => {
    const { generalData } = useContext(DataContext);

    return (
        <div className="max-w-[8.5in] mx-auto p-8 bg-white shadow-lg font-['Lato',sans-serif] text-gray-800 leading-relaxed">
            {/* Header Section - Matching LaTeX heading structure */}
            <header className="text-center mb-6">
                <div className="inline-block">
                    {/* Name - Large, bold, small caps */}
                    <h1 className="text-4xl font-bold mb-2 text-black uppercase tracking-wider font-variant-small-caps">
                        {generalData.name || 'First Last'}
                    </h1>
                    
                    {/* Contact info - centered with icons and links */}
                    <div className="flex justify-center items-center flex-wrap gap-6 text-sm mt-1">
                        {/* Phone */}
                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <i className="fas fa-phone text-gray-600 w-3.5 text-xs"></i>
                            <span>{generalData.phone || 'XXX-XXX-XXXX'}</span>
                        </div>
                        
                        {/* Email */}
                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <i className="fas fa-envelope text-gray-600 w-3.5 text-xs"></i>
                            <a 
                                href={`mailto:${generalData.email || 'firstlast@gmail.com'}`} 
                                className="text-black underline underline-offset-2 decoration-gray-500 hover:decoration-black hover:text-gray-700"
                            >
                                {generalData.email || 'firstlast@gmail.com'}
                            </a>
                        </div>
                        
                        {/* LinkedIn */}
                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <i className="fab fa-linkedin text-gray-600 w-3.5 text-xs"></i>
                            <a 
                                href="https://www.linkedin.com/in/" 
                                className="text-black underline underline-offset-2 decoration-gray-500 hover:decoration-black hover:text-gray-700"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                linkedin.com/firstlast
                            </a>
                        </div>
                        
                        {/* GitHub */}
                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <i className="fab fa-github text-gray-600 w-3.5 text-xs"></i>
                            <a 
                                href="https://github.com/" 
                                className="text-black underline underline-offset-2 decoration-gray-500 hover:decoration-black hover:text-gray-700"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                github.com/firstlast
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Placeholder sections for other resume parts */}
            <div className="mt-4">
                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-3">
                        EDUCATION
                    </h2>
                    <div className="ml-2">
                        <p className="text-sm my-1">Education information will go here...</p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-3">
                        EXPERIENCE
                    </h2>
                    <div className="ml-2">
                        <p className="text-sm my-1">Experience information will go here...</p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-3">
                        PROJECTS
                    </h2>
                    <div className="ml-2">
                        <p className="text-sm my-1">Projects information will go here...</p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-lg font-bold uppercase tracking-wider text-black border-b border-black pb-1 mb-3">
                        SKILLS
                    </h2>
                    <div className="ml-2">
                        <p className="text-sm my-1">Skills information will go here...</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OutputContainer;
