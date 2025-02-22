import { useState } from 'react';

export default function PracticalInput() {
    const [employer, setEmployer] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleChange = (e) => {
        const target = e.target;

        switch (target.name) {
            case 'employer':
                setEmployer(target.value);
                break;
            case 'job_title':
                setTitle(target.value);
                break;
            case 'description':
                setDescription(target.value);
                break;
            case 'job_start_date':
                setStartDate(target.value);
                break;
            case 'job_end_date':
                setEndDate(target.value);
                break;
        }
    };

    return (
        <fieldset className='flex flex-col flex-nowrap'>
            <p>
                {employer} {title} {description} {startDate} {endDate}
            </p>
            <input
                type='text'
                id='employer'
                name='employer'
                placeholder='Employer'
                onChange={handleChange}
            />
            <input
                type='text'
                id='job_title'
                name='job_title'
                placeholder='Job Title'
                onChange={handleChange}
            />

            <textarea
                type='text'
                id='description'
                name='description'
                placeholder='Job Description'
                maxLength='500'
                onChange={handleChange}
            />

            <input
                type='date'
                id='job_start_date'
                name='job_start_date'
                placeholder='Start Date'
                onChange={handleChange}
            />

            <input
                type='date'
                id='job_end_date'
                name='job_end_date'
                placeholder='End Date'
                onChange={handleChange}
            />
        </fieldset>
    );
}
