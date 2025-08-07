import { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';

const GeneralInput = () => {
    const { generalData, updateGeneralData } = useContext(DataContext);
    return (
        <>
            <fieldset>
                <legend>General Information</legend>

                <div>
                    <label htmlFor='name'>Full Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={generalData.name}
                        placeholder='Enter your full name'
                        onChange={(e) =>
                            updateGeneralData('name', e.target.value)
                        }
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={generalData.email}
                        placeholder='Enter your email address'
                        onChange={(e) =>
                            updateGeneralData('email', e.target.value)
                        }
                    />
                </div>

                <div>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={generalData.phone}
                        onChange={(e) => {
                            updateGeneralData('phone', e.target.value);
                        }}
                    />
                </div>
            </fieldset>
        </>
    );
};

export default GeneralInput;
