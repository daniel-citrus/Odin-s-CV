import { useContext } from 'react';
import { DataContext } from '../DataContext';

export default function GeneralOutput() {
    const {
        generalData: { name, email, phone, website },
    } = useContext(DataContext);

    return (
        <div className='general'>
            <div className='name'>{name}</div>
            <ul className='generalInfo'>
                <li className='email'>{email}</li>
                <li className='phone'>{phone}</li>
                <li className='website'>{website}</li>
            </ul>
        </div>
    );
}
