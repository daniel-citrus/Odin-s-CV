import { useContext } from 'react';
import { DataContext } from '../DataContext';

export default function PracticalOutput() {
    const {
        practical: { employer, title, description, workStartDate, workEndDate },
    } = useContext(DataContext);

    return (
        <li className='practical'>
            <div className='employer'>{employer}</div>
            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
            <div className='workStartDate'>{workStartDate}</div>
            <div className='workEndDate'>{workEndDate}</div>
        </li>
    );
}
