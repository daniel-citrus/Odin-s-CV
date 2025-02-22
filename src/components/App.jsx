import { useState } from 'react';
import InputForm from './InputForm';
import Resume from './Resume';

import { DataContext } from './DataContext';

export default function App() {
    /* General */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsitfe] = useState('');
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

    const handleChange = (e) => {
        const target = e.target;

        switch (target.name) {
            case 'name':
                setName(target.value);
                break;
            case 'email':
                setEmail(target.value);
                break;
            case 'phone':
                setPhone(target.value);
                break;
            case 'website':
                setWebsite(target.value);
                break;
            case 'school':
                setSchool(target.value);
                break;
            case 'study':
                setStudy(target.value);
                break;
            case 'studyStartDate':
                setStudyStartDate(target.value);
                break;
            case 'studyEndDate':
                setStudyEndDate(target.value);
                break;
            case 'employer':
                setEmployer(target.value);
                break;
            case 'title':
                setTitle(target.value);
                break;
            case 'description':
                setDescription(target.value);
                break;
            case 'workStartDate':
                setWorkStartDate(target.value);
                break;
            case 'workEndDate':
                setWorkEndDate(target.value);
                break;
        }
    };

    const setWebsite = (e) => {
        setWebsitfe(e);
    };
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
