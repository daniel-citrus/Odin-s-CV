import { useContext } from 'react';
import { DataContext } from '../DataContext';

export default function GeneralInput() {
    const {
        general: {
            name,
            email,
            phone,
            website,
            setName,
            setEmail,
            setPhone,
            setWebsite,
        },
    } = useContext(DataContext);

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
            case 'website':
                setWebsite(target.value);
                break;
        }
    };

    return (
        <fieldset className='flex flex-col flex-nowrap '>
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
            <label htmlFor='website'>Website</label>
            <input
                type='text'
                id='website'
                name='website'
                value={website}
                onChange={handleChange}
                placeholder='Website'
            />
        </fieldset>
    );
}
