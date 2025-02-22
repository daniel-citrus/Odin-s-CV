import { useContext } from 'react';
import { DataContext } from '../DataContext';

export default function EducationalOutput() {
    const { educationData } = useContext(DataContext);

    return (
        <ul className='education'>
            {educationData.map((ed) => {
                return (
                    <li key={ed.id}>
                        <div className='school'>{ed.school}</div>
                        <div className='study'>{ed.study}</div>
                        <div className='studyStartDate'>
                            {ed.studyStartDate}
                        </div>
                        <div className='studyEndDate'>{ed.studyEndDate}</div>
                    </li>
                );
            })}
            <li></li>
        </ul>
    );
}
