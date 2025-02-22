import { useState } from 'react';
import { worker } from 'globals';
import InputForm from './InputForm';
import Resume from './Resume';

export default function App() {
    /* General */
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    /* Educational */
    /* const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    const [studyStartDate, setStudyStartDate] = useState('');
    const [studyEndDate, setStudyEndDate] = useState(''); */
    /* Practical */
    /* const [employer, setEmployer] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [workStartDate, setWorkStartDate] = useState('');
    const [workEndDate, setWorkEndDate] = useState(''); */

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
        }
    };

    const props = {
        name,
        email,
        phone,
        website,
        /*         school,
        study,
        studyStartDate,
        studyEndDate,
        employer,
        title,
        description,
        workStartDate,
        workEndDate, */
        handleChange,
    };

    return (
        <>
            <InputForm {...props} />
            <Resume {...props} />
        </>
    );
}
