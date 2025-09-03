import GeneralInput from './GeneralInput';
import EducationInput from './EducationInput';
import ExperienceInput from './ExperienceInput';
import useDataContext from '../../hooks/useDataContext';
import { useEffect } from 'react';
const InputContainer = () => {
    const { updateGeneralData, insertEducationData, insertExperience } =
        useDataContext();
    useEffect(() => {
        updateGeneralData('name', 'Daniel');
        updateGeneralData('email', 'dandcalvo@gmail.com');
        updateGeneralData('phone', '510-846-4484');
        insertEducationData({
            school: 'Texas A&M University - Commerce',
            degree: "Bachelor's Degree in Computer Science",
            gradMonth: 'December',
            gradYear: '2019',
            actualGPA: '3.5',
            totalGPA: '4.0',
            city: 'Commerce',
            state: 'TX',
            courseWork:
                'Data Structures and Algorithms, Operating Systems, Digital Logic & Circuitry, Data Analytics, Math Statistics, Project Development',
        });
        insertExperience({
            organization: 'Hayward Unified School District',
            role: 'Web Developer',
            startMonth: 'January',
            startYear: '2022',
            present: true,
            endMonth: '',
            endYear: '',
            city: 'Hayward',
            state: 'CA',
            description: [
                'Manage and modernize 30+ websites across the district, improving accessibility and performance.',
                'Created reusable CMS templates and content workflows to streamline updates for non-technical staff.',
                'Enforced WCAG 2.0 compliance to serve a diverse community.',
            ],
        });
    }, []);

    return (
        <div className='min-h-screen bg-gray-50 py-8 px-4'>
            <div className='max-w-4xl mx-auto'>
                {/* Input Form Container */}
                <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                    {/* Form Header */}
                    <div className='bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-6'>
                        <h1 className='text-3xl font-bold text-center mb-2'>
                            Resume Builder
                        </h1>
                        <p className='text-green-100 text-center text-lg'>
                            Fill in your information below
                        </p>
                    </div>

                    {/* Form Content */}
                    <div className='px-8 py-6 space-y-6'>
                        <form className='space-y-6'>
                            <GeneralInput />
                            <EducationInput />
                            <ExperienceInput />

                            {/* Placeholder sections for future components */}
                            <div className='border-t-2 border-gray-200 pt-6'>
                                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                                    Projects
                                </h2>
                                <div className='bg-gray-50 rounded-lg p-4 text-gray-600 text-center'>
                                    <p>Projects section coming soon...</p>
                                </div>
                            </div>

                            <div className='border-t-2 border-gray-200 pt-6'>
                                <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                                    Technical Skills
                                </h2>
                                <div className='bg-gray-50 rounded-lg p-4 text-gray-600 text-center'>
                                    <p>Skills section coming soon...</p>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Form Footer */}
                    <div className='bg-gray-100 px-8 py-4 text-center text-gray-600 text-sm'>
                        <p>Your data is saved automatically as you type</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputContainer;
