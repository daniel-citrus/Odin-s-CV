import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const GeneralOutput = () => {
    const { generalData } = useContext(DataContext);

    return (
        <div>
            {/* Header Section - Matching LaTeX heading structure */}
            <header>
                <div>
                    {/* Name - Large, bold, small caps */}
                    <h1>
                        {generalData.name || 'First Last'}
                    </h1>

                    {/* Contact info - centered with icons and links */}
                    <div>
                        {/* Phone */}
                        <div>
                            <i className='fas fa-phone'></i>
                            <span>{generalData.phone || 'XXX-XXX-XXXX'}</span>
                        </div>

                        {/* Email */}
                        <div>
                            <i className='fas fa-envelope'></i>
                            <a
                                href={`mailto:${
                                    generalData.email || 'firstlast@gmail.com'
                                }`}
                            >
                                {generalData.email || 'firstlast@gmail.com'}
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div>
                            <i className='fab fa-linkedin'></i>
                            <a
                                href='https://www.linkedin.com/in/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                linkedin.com/firstlast
                            </a>
                        </div>

                        {/* GitHub */}
                        <div>
                            <i className='fab fa-github'></i>
                            <a
                                href='https://github.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github.com/firstlast
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default GeneralOutput;
