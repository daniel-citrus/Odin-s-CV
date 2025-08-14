import { useState } from 'react';
import useDataContext from '../../../hooks/useDataContext';

const EducationInput = () => {
    const {
        educationData,
        //insertEducationData,
        updateEducationData,
        deleteEducationData,
    } = useDataContext();

    const [inputWindowStatus, setInputWindowStatus] = useState('closed');

    const openInputWindow = (dataId) => {
        setInputWindowStatus(dataId);
    };

    const saveInput = () => {
        setInputWindowStatus('closed');
    };

    return (
        <div>
            <ul>
                {educationData.map((educationItem) => (
                    <li key={educationItem.id}>
                        <div className='school'>{educationItem.school}</div>
                        <div className='gradMonth'>
                            {educationItem.gradMonth}
                        </div>
                        <div className='gradYear'>{educationItem.gradYear}</div>
                        <div className='controls'>
                            <button
                                type='button'
                                className='edit'
                                onClick={() => {
                                    openInputWindow(educationItem.id);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                type='button'
                                className='delete'
                                onClick={() =>
                                    deleteEducationData(educationItem.id)
                                }
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {inputWindowStatus != 'closed' && (
                <EditWindow
                    data={educationData.find((d) => d.id === inputWindowStatus)}
                    updateEducationData={updateEducationData}
                    saveInput={saveInput}
                />
            )}
        </div>
    );
};

const EditWindow = ({ data, saveInput, updateEducationData }) => {
    if (!data) {
        return;
    }

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const changeEducationData = (dataName, newValue) => {
        updateEducationData(data.id, dataName, newValue);
    };

    return (
        <div className='inputBox'>
            <fieldset>
                <legend>Education Entry</legend>

                <div className='form-row'>
                    <label htmlFor='school'>School:</label>
                    <input
                        type='text'
                        id='school'
                        name='school'
                        placeholder='Enter school name'
                        value={data.school || ''}
                        onChange={(e) => {
                            changeEducationData('school', e.target.value);
                        }}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='degree'>Degree:</label>
                    <input
                        type='text'
                        id='degree'
                        name='degree'
                        placeholder='Enter degree'
                        value={data.degree || ''}
                        onChange={(e) => {
                            changeEducationData('degree', e.target.value);
                        }}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='gradMonth'>Graduation Month:</label>
                    <select
                        id='gradMonth'
                        name='gradMonth'
                        onChange={(e) =>
                            changeEducationData('gradMonth', e.target.value)
                        }
                        value={data.gradMonth || ''}
                    >
                        <option value=''>Select month</option>
                        {months.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='form-row'>
                    <label htmlFor='gradYear'>Graduation Year:</label>
                    <input
                        type='number'
                        id='gradYear'
                        name='gradYear'
                        placeholder='2024'
                        min='1950'
                        max='9999'
                        onChange={(e) => {
                            changeEducationData('gradYear', e.target.value);
                        }}
                        value={data.gradYear}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='actualGPA'>Actual GPA:</label>
                    <input
                        type='number'
                        id='actualGPA'
                        name='actualGPA'
                        placeholder='3.5'
                        step='0.01'
                        min='0'
                        max='4'
                        onChange={(e) =>
                            changeEducationData('actualGPA', e.target.value)
                        }
                        value={data.actualGPA || ''}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='totalGPA'>Total GPA:</label>
                    <input
                        type='number'
                        id='totalGPA'
                        name='totalGPA'
                        placeholder='4.0'
                        step='0.01'
                        min='0'
                        max='4'
                        onChange={(e) =>
                            changeEducationData('totalGPA', e.target.value)
                        }
                        value={data.totalGPA || ''}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='city'>City:</label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        placeholder='Enter city'
                        onChange={(e) =>
                            changeEducationData('city', e.target.value)
                        }
                        value={data.city || ''}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='state'>State:</label>
                    <input
                        type='text'
                        id='state'
                        name='state'
                        placeholder='Enter state'
                        onChange={(e) =>
                            changeEducationData('state', e.target.value)
                        }
                        value={data.state || ''}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='courseWork'>Relevant Coursework:</label>
                    <textarea
                        id='courseWork'
                        name='courseWork'
                        placeholder='Enter relevant coursework'
                        rows='3'
                        onChange={(e) =>
                            changeEducationData('courseWork', e.target.value)
                        }
                        value={data.courseWork || ''}
                    />
                </div>

                <div className='form-controls'>
                    <button type='submit' onClick={saveInput}>
                        Save
                    </button>
                </div>
            </fieldset>
        </div>
    );
};

export default EducationInput;
