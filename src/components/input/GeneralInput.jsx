import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const GeneralInput = () => {
    const { generalData, updateGeneralData } = useContext(DataContext);
    return (
        <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
            <fieldset className='border-0'>
                <legend className='text-xl font-semibold text-gray-800 mb-4 px-2'>
                    General Information
                </legend>

                <div className='mb-4'>
                    <label
                        htmlFor='name'
                        className='block text-sm font-medium text-gray-700 mb-2'
                    >
                        Full Name:
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={generalData.name}
                        placeholder='Enter your full name'
                        onChange={(e) =>
                            updateGeneralData('name', e.target.value)
                        }
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 mb-2'
                    >
                        Email Address:
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={generalData.email}
                        placeholder='Enter your email address'
                        onChange={(e) =>
                            updateGeneralData('email', e.target.value)
                        }
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    />
                </div>

                <div className='mb-4'>
                    <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700 mb-2'
                    >
                        Phone Number:
                    </label>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={generalData.phone}
                        placeholder='Enter your phone number'
                        onChange={(e) => {
                            updateGeneralData('phone', e.target.value);
                        }}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    />
                </div>
            </fieldset>
        </div>
    );
};

export default GeneralInput;
