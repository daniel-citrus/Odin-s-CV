import { useState } from 'react';
import InputForm from './inputComponents/InputForm';
import OutputForm from './outputComponents/OutputForm';
import { DataContext } from './DataContext';

export default function App() {
    const [generalData, setGeneralData] = useState({
        name: 'Daniel Calvo',
        email: 'thisismyemail@gmail.com',
        phone: '(510) 123-4567',
        website: 'www.daniel-calvo.com',
    });

    const [educationData, setEducationData] = useState([
        {
            id: '1',
            school: 'Texas A&M University - Commerce',
            study: 'Computer Science',
            studyStartDate: '',
            studyEndDate: '',
        },
        {
            id: '2',
            school: 'Encinal High School',
            study: 'GED',
            studyStartDate: '',
            studyEndDate: '',
        },
    ]);

    const [practicalData, setPracticalData] = useState([
        {
            id: '1',
            employer: 'Hayward Unified School District',
            title: 'District Webmaster',
            description:
                'Manage and maintain 30 district-owned websites, providing guidance on content updates, creating user-friendly training materials for diverse audiences, and enhancing web accessibility.',
            workStartDate: '',
            workEndDate: '',
        },
        {
            id: '2',
            employer: 'Alameda County Community Food Bank',
            title: 'Data Analyst',
            description: `Enhanced Excel reports with VBA scripts to extract and visualize distribution metrics. Implemented scripts to optimize order processing and reduce manual workload.
`,
            workStartDate: '',
            workEndDate: '',
        },
    ]);

    return (
        <div className='p-3'>
            <DataContext.Provider
                value={{
                    educationData,
                    setEducationData,
                    generalData,
                    setGeneralData,
                    practicalData,
                    setPracticalData,
                }}
            >
                <h1>Resume Generator</h1>
                <div className=''>
                    <InputForm />
                    <OutputForm className='h-full' />
                </div>
            </DataContext.Provider>
        </div>
    );
}
