import { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';

const GeneralInput = () => {
    const { generalInfo, updateGeneralInfo } = useContext(DataContext);
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
                        value={generalInfo.name}
                        placeholder='Enter your full name'
                        onChange={(e) =>
                            updateGeneralInfo('name', e.target.value)
                        }
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={generalInfo.email}
                        placeholder='Enter your email address'
                        onChange={(e) =>
                            updateGeneralInfo('email', e.target.value)
                        }
                    />
                </div>

                <div>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={generalInfo.phone}
                        onChange={(e) => {
                            updateGeneralInfo('phone', e.target.value);
                        }}
                    />
                </div>
            </fieldset>
        </>
    );
};

export default GeneralInput;
