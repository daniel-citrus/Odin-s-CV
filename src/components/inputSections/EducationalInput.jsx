import { useContext } from 'react';
import { DataContext } from '../DataContext';

export default function Educational() {
    const {
        educational: {
            school,
            study,
            studyStartDate,
            studyEndDate,
            setSchool,
            setStudy,
            setStudyStartDate,
            setStudyEndDate,
        },
    } = useContext(DataContext);

    const handleChange = (e) => {
        const target = e.target;

        switch (target.name) {
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
        }
    };

    return (
        <fieldset className='flex flex-col flex-nowrap'>
            <label htmlFor='school'>School Name</label>
            <input
                type='text'
                id='school'
                name='school'
                placeholder='School Name'
                onChange={handleChange}
                value={school}
            />
            <label htmlFor='study'>Degree</label>
            <input
                type='text'
                id='study'
                name='study'
                value={study}
                placeholder='Title of Study'
                onChange={handleChange}
            />
            <div className='schoolDate flex flex-col flex-nowrap'>
                <label htmlFor='studyStartDate'>{studyStartDate}</label>
                <input
                    type='date'
                    name='studyStartDate'
                    id='studyStartDate'
                    value={studyStartDate}
                    onChange={handleChange}
                />
                <label htmlFor='studyEndDate'>{studyEndDate}</label>
                <input
                    type='date'
                    name='studyEndDate'
                    id='studyEndDate'
                    value={studyEndDate}
                    onChange={handleChange}
                />
            </div>
        </fieldset>
    );
}
