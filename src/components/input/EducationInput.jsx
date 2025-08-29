import { useState } from 'react';
import useDataContext from '../../hooks/useDataContext';

const EducationInput = () => {
    const {
        educationData,
        insertEducationData,
        updateEducationData,
        deleteEducationData,
    } = useDataContext();

    const [inputWindowStatus, setInputWindowStatus] = useState('closed');
    const [editingInputId, setEditingInputId] = useState(null);

    const onAddInput = (inputData) => {
        insertEducationData(inputData);
        setInputWindowStatus('closed');
        setEditingInputId(null);
    };

    const onEditInput = (dataId) => {
        setEditingInputId(dataId);
        setInputWindowStatus('editing');
    };

    const onUpdateInput = (id, data) => {
        updateEducationData(id, data);
        setInputWindowStatus('closed');
        setEditingInputId(null);
    };

    const onInsertNewInput = () => {
        setEditingInputId(null);
        setInputWindowStatus('creating');
    };

    const onInputWindowCancel = () => {
        setInputWindowStatus('closed');
        setEditingInputId(null);
    };

    return (
        <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
            <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Education
            </h3>
            <ul className='space-y-3'>
                {educationData.map((educationItem) => (
                    <li
                        key={educationItem.id}
                        className='bg-gray-50 rounded-lg p-4 border border-gray-200'
                    >
                        <div className='flex justify-between items-start'>
                            <div className='flex-1'>
                                <div className='school font-medium text-gray-900'>
                                    {educationItem.school}
                                </div>
                                <div className='text-sm text-gray-600'>
                                    {educationItem.gradMonth}{' '}
                                    {educationItem.gradYear}
                                </div>
                            </div>
                            <div className='controls flex space-x-2 ml-4'>
                                <button
                                    type='button'
                                    className='edit px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors'
                                    onClick={() => {
                                        onEditInput(educationItem.id);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    type='button'
                                    className='delete px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors'
                                    onClick={() =>
                                        deleteEducationData(educationItem.id)
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
                <li key='add-education-button'>
                    <button
                        type='button'
                        className='w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors'
                        onClick={() => onInsertNewInput()}
                    >
                        + Add Education
                    </button>
                </li>
            </ul>
            {inputWindowStatus != 'closed' && (
                <EditWindow
                    status={inputWindowStatus}
                    inputData={
                        editingInputId
                            ? educationData.find((d) => d.id === editingInputId)
                            : null
                    }
                    onAddInput={onAddInput}
                    onUpdateInput={onUpdateInput}
                    onCancel={onInputWindowCancel}
                />
            )}
        </div>
    );
};

const EditWindow = ({
    status,
    inputData,
    onAddInput,
    onUpdateInput,
    onCancel,
}) => {
    const [formData, setFormData] = useState({
        id: inputData?.id || '',
        school: inputData?.school || '',
        degree: inputData?.degree || '',
        gradMonth: inputData?.gradMonth || '',
        gradYear: inputData?.gradYear || '',
        actualGPA: inputData?.actualGPA || '',
        totalGPA: inputData?.totalGPA || '',
        city: inputData?.city || '',
        state: inputData?.state || '',
        courseWork: inputData?.courseWork || '',
    });

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

    const updateField = (fieldName, newValue) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: newValue,
        }));
    };

    return (
        <div
            className='inputBox fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onCancel();
                }
            }}
        >
            <div className='bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto'>
                <fieldset className='border-0'>
                    <legend className='text-xl font-semibold text-gray-800 mb-4'>
                        Education Entry
                    </legend>

                    <div className='form-row mb-4'>
                        <label
                            htmlFor='school'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            School:
                        </label>
                        <input
                            type='text'
                            id='school'
                            name='school'
                            placeholder='Enter school name'
                            value={formData.school}
                            onChange={(e) => {
                                updateField('school', e.target.value);
                            }}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        />
                    </div>
                    <div className='form-row mb-4'>
                        <label
                            htmlFor='degree'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            Degree:
                        </label>
                        <input
                            type='text'
                            id='degree'
                            name='degree'
                            placeholder='Enter degree'
                            value={formData.degree}
                            onChange={(e) => {
                                updateField('degree', e.target.value);
                            }}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        />
                    </div>

                    <div className='form-row mb-4'>
                        <label
                            htmlFor='gradMonth'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            Graduation Month:
                        </label>
                        <select
                            id='gradMonth'
                            name='gradMonth'
                            onChange={(e) =>
                                updateField('gradMonth', e.target.value)
                            }
                            value={formData.gradMonth}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        >
                            <option value=''>Select month</option>
                            {months.map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='form-row mb-4'>
                        <label
                            htmlFor='gradYear'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            Graduation Year:
                        </label>
                        <input
                            type='number'
                            id='gradYear'
                            name='gradYear'
                            placeholder='2024'
                            min='1950'
                            max='9999'
                            onChange={(e) => {
                                updateField('gradYear', e.target.value);
                            }}
                            value={formData.gradYear}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        />
                    </div>

                    <div className='form-row mb-4'>
                        <label
                            htmlFor='actualGPA'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            Actual GPA:
                        </label>
                        <input
                            type='number'
                            id='actualGPA'
                            name='actualGPA'
                            placeholder='3.5'
                            step='0.01'
                            min='0'
                            max='4'
                            onChange={(e) =>
                                updateField('actualGPA', e.target.value)
                            }
                            value={formData.actualGPA}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        />
                    </div>

                    <div className='form-row mb-4'>
                        <label
                            htmlFor='totalGPA'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            Total GPA:
                        </label>
                        <input
                            type='number'
                            id='totalGPA'
                            name='totalGPA'
                            placeholder='4.0'
                            step='0.01'
                            min='0'
                            max='4'
                            onChange={(e) =>
                                updateField('totalGPA', e.target.value)
                            }
                            value={formData.totalGPA}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        />
                    </div>

                    <div className='form-row mb-4'>
                        <label
                            htmlFor='city'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            City:
                        </label>
                        <input
                            type='text'
                            id='city'
                            name='city'
                            placeholder='Enter city'
                            onChange={(e) =>
                                updateField('city', e.target.value)
                            }
                            value={formData.city}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        />
                    </div>

                    <div className='form-row mb-4'>
                        <label
                            htmlFor='state'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            State:
                        </label>
                        <input
                            type='text'
                            id='state'
                            name='state'
                            placeholder='Enter state'
                            onChange={(e) =>
                                updateField('state', e.target.value)
                            }
                            value={formData.state}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                        />
                    </div>

                    <div className='form-row mb-6'>
                        <label
                            htmlFor='courseWork'
                            className='block text-sm font-medium text-gray-700 mb-2'
                        >
                            Relevant Coursework:
                        </label>
                        <textarea
                            id='courseWork'
                            name='courseWork'
                            placeholder='Enter relevant coursework'
                            rows='3'
                            onChange={(e) =>
                                updateField('courseWork', e.target.value)
                            }
                            value={formData.courseWork}
                            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical'
                        />
                    </div>

                    <div className='form-controls'>
                        {status === 'creating' && (
                            <button
                                type='button'
                                onClick={() => onAddInput(formData)}
                                className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
                            >
                                Add
                            </button>
                        )}
                        {status === 'editing' && (
                            <button
                                type='button'
                                onClick={() =>
                                    onUpdateInput(inputData.id, formData)
                                }
                                className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'
                            >
                                Save
                            </button>
                        )}
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default EducationInput;
