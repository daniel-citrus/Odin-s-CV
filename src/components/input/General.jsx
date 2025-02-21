import { useState } from 'react';

export default function General() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

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
        }
    };

    return (
        <fieldset className='flex flex-col flex-nowrap '>
            <p>
                {name} {email} {phone}
            </p>
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
        </fieldset>
    );
}
