import { useContext } from 'react';
import { DataContext } from '../DataContext';

export default function PracticalInput() {
    const {
        practical: {
            employer,
            title,
            description,
            workStartDate,
            workEndDate,
            setTitle,
            setEmployer,
            setDescription,
            setWorkStartDate,
            setWorkEndDate,
        },
    } = useContext(DataContext);

    const handleChange = (e) => {
        const target = e.target;

        switch (target.name) {
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

    return (
        <fieldset className='flex flex-col flex-nowrap'>
            <label htmlFor='employer'>Employer</label>
            <input
                type='text'
                id='employer'
                name='employer'
                placeholder='Employer'
                value={employer}
                onChange={handleChange}
            />
            <label htmlFor='title'>Title</label>
            <input
                type='text'
                id='title'
                name='title'
                placeholder='Job Title'
                value={title}
                onChange={handleChange}
            />
            <label htmlFor='description'>Job Description</label>
            <textarea
                type='text'
                id='description'
                name='description'
                placeholder='Job Description'
                maxLength='500'
                value={description}
                onChange={handleChange}
            />
            <label htmlFor='workStartDate'>Start Date</label>
            <input
                type='date'
                id='workStartDate'
                name='workStartDate'
                placeholder='Start Date'
                value={workStartDate}
                onChange={handleChange}
            />
            <label htmlFor='workEndDate'>End Date</label>
            <input
                type='date'
                id='workEndDate'
                name='workEndDate'
                placeholder='End Date'
                value={workEndDate}
                onChange={handleChange}
            />
        </fieldset>
    );
}
