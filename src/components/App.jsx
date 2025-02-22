import { useContext, useState } from 'react';
import InputForm from './InputForm';
import Resume from './Resume';

import { DataContext } from './DataContext';

export default function App() {
    const [educationData, setEducationData] = useContext(DataContext);
    
    /* General */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    /* Educational */
    const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    const [studyStartDate, setStudyStartDate] = useState('');
    const [studyEndDate, setStudyEndDate] = useState('');
    /* Practical */
    const [employer, setEmployer] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [workStartDate, setWorkStartDate] = useState('');
    const [workEndDate, setWorkEndDate] = useState('');

    const general = {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        website,
        setWebsite,
    };

    const educational = {
        school,
        study,
        studyStartDate,
        studyEndDate,
        setSchool,
        setStudy,
        setStudyStartDate,
        setStudyEndDate,
    };

    const practical = {
        employer,
        title,
        description,
        workStartDate,
        workEndDate,
        setEmployer,
        setTitle,
        setDescription,
        setWorkStartDate,
        setWorkEndDate,
    };

    return (
        <DataContext.Provider value={{ general, educational, practical }}>
            <InputForm />
            <Resume />
        </DataContext.Provider>
    );
}
