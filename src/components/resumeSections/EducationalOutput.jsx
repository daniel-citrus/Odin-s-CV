import { useContext } from 'react';
import { DataContext } from '../DataContext';

export default function EducationalOutput() {
    const {
        educational: { school, study, studyStartDate, studyEndDate },
    } = useContext(DataContext);

    return (
        <div className='educational'>
            <div className='school'>{school}</div>
            <div className='study'>{study}</div>
            <div className='studyStartDate'>{studyStartDate}</div>
            <div className='studyEndDate'>{studyEndDate}</div>
        </div>
    );
}
