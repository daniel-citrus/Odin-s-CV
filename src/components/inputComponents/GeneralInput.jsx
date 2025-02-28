import { useContext } from 'react';
import { DataContext } from '../DataContext';
import InputFormControls from './inputSubComponents/InputFormControls';
import InputFieldCards from './InputFieldCards';

export default function GeneralInput() {
    const { generalData, setGeneralData } = useContext(DataContext);
    let { name, email, phone, website } = generalData;

    const handleClear = () => {
        setGeneralData({
            name: '',
            email: '',
            phone: '',
            website: '',
        });
    };

    const handleChange = (e) => {
        const target = e.target;

        switch (target.name) {
            case 'name':
                name = target.value;
                break;
            case 'email':
                email = target.value;
                break;
            case 'phone':
                phone = target.value;
                break;
            case 'website':
                website = target.value;
                break;
        }

        setGeneralData({
            name,
            email,
            phone,
            website,
        });
    };

    return (
        <InputFieldCards cardClass={'general'}>
            <form className='flex flex-col flex-nowrap '>
                <h2>Personal Information</h2>
                <p>How can potential employers reach you?</p>
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
            </form>
            <InputFormControls enableClear={true} handleClear={handleClear} />
        </InputFieldCards>
    );
}
