import { useState } from 'react';
import InputFields from './InputFields';
import Resume from './Resume';
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

    const [practicalData, setPracticalData] = useState({
        employer: 'Hayward Unified School District',
        title: 'District Webmaster',
        description:
            'Manage and maintain 30 district-owned websites, providing guidance on content updates, creating user-friendly training materials for diverse audiences, and enhancing web accessibility.',
    });

    return (
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
            <InputFields />
            <Resume />
        </DataContext.Provider>
    );
}
