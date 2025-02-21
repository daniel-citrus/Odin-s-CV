import { useState } from 'react';

export default function Educational() {
    const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleChange = (e) => {
        const target = e.target;

        switch (target.name) {
            case 'school':
                setSchool(target.value);
                break;
            case 'study':
                setStudy(target.value);
                break;
            case 'school_start':
                setStartDate(target.value);
                break;
            case 'school_end':
                setEndDate(target.value);
                break;
        }
    };

    return (
        <fieldset className='flex flex-col flex-nowrap'>
            <p>
                {school} {study} {startDate} {endDate}
            </p>
            <label htmlFor='school'>School Name</label>
            <input
                type='text'
                id='school'
                name='school'
                placeholder='School Name'
                onChange={handleChange}
            />
            <label htmlFor='study'>Study</label>
            <input
                type='text'
                id='study'
                name='study'
                placeholder='Title of Study'
                onChange={handleChange}
            />
            <div className='schoolDate flex flex-col flex-nowrap'>
                <label htmlFor='school_start'>Start</label>
                <input
                    type='date'
                    name='school_start'
                    id='school_start'
                    onChange={handleChange}
                />
                <label htmlFor='school_end'>End</label>
                <input
                    type='date'
                    name='school_end'
                    id='school_end'
                    onChange={handleChange}
                />
            </div>
        </fieldset>
    );
}
