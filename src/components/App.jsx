import { useState } from 'react';
import InputForm from './InputForm';
import Resume from './Resume';
import { v4 as uuid4 } from 'uuid';

import { DataContext } from './DataContext';

export default function App() {
    const [data, setData] = useState([
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

    return (
        <DataContext.Provider value={{ data, setData }}>
            <InputForm />
            <Resume />
        </DataContext.Provider>
    );
}
