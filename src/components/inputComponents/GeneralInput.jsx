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
            <form
                className='flex flex-col gap-3'
                onSubmit={(e) => e.preventDefault()}
            >
                <h2>Personal Information</h2>
                <p>How can potential employers reach you?</p>
                <label htmlFor='name'>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder=''
                        required
                        value={name}
                        onChange={handleChange}
                    />
                    <span class='labelText'>Name</span>
                </label>
                <label htmlFor='email'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder=''
                    />
                    <span class='labelText'>Email</span>
                </label>
                <label htmlFor='email'>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        placeholder=''
                        value={phone}
                        onChange={handleChange}
                        pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$'
                    />
                    <span class='labelText'>
                        Phone <span class='subtext'></span>
                    </span>
                </label>
                <label htmlFor='website'>
                    <input
                        type='text'
                        id='website'
                        name='website'
                        value={website}
                        onChange={handleChange}
                        placeholder=''
                    />
                    <span class='labelText'>Website</span>
                </label>
            </form>
            <InputFormControls enableClear={true} handleClear={handleClear} />
        </InputFieldCards>
    );
}
