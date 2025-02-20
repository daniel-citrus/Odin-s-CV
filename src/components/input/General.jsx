import { useState } from 'react';

export default function General() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (e) => {
        const target = e.target;

        if (target.name === 'name') {
            setName(target.value);
        } else if (target.name === 'email') {
            setEmail(target.value);
        } else if (target.name === 'phone') {
            setPhone(target.value);
        }
    };

    return (
        <form className='flex flex-frow flex-nowrap'>
            <label htmlFor='name'>Name</label>
            <input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                required
                value={name}
                onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Email'
            />
            <label htmlFor='email'>Phone</label>
            <input
                type='tel'
                id='phone'
                name='phone'
                placeholder='Phone'
                value={phone}
                onChange={handleChange}
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            />
        </form>
    );
}
