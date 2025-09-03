import { useState } from 'react';
import useDataContext from '../../hooks/useDataContext';

const ExperienceInput = () => {
    const {
        experienceData,
        insertExperience,
        deleteExperience,
        updateExperience,
    } = useDataContext();

    const [editorStatus, setEditorStatus] = useState('closed');
    const [editingExperienceId, setEditingExperienceId] = useState(null);

    const onAddExperience = () => {
        setEditorStatus('adding');
    };
    const onEditExperience = (id) => {
        setEditorStatus('editing');
        setEditingExperienceId(id);
    };

    const onCloseEditor = () => {
        setEditorStatus('closed');
        setEditingExperienceId(null);
    };

    const findExperienceData = (id) => {
        return experienceData.find((data) => data.id === id);
    };

    return (
        <>
            <div>Experience</div>
            <ul>
                {experienceData.map((entry) => {
                    return (
                        <li key={entry.id}>
                            <div className='experienceData'>
                                <div>{entry.organization}</div>
                                <div>{entry.role}</div>
                                <div>{entry.startMonth}</div>
                                <div>{entry.endMonth}</div>
                                <div>{entry.startYear}</div>
                                <div>{entry.endYear}</div>
                            </div>
                            <button
                                type='button'
                                onClick={() => onEditExperience(entry.id)}
                            >
                                Edit
                            </button>
                            <button
                                type='button'
                                onClick={() => deleteExperience(entry.id)}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button type='button' onClick={() => onAddExperience()}>
                + Add Experience
            </button>
            {editorStatus === 'closed' || (
                <ExperienceEditor
                    status={editorStatus}
                    data={findExperienceData(editingExperienceId)}
                    insertExperience={insertExperience}
                    updateExperience={updateExperience}
                    closeEditor={onCloseEditor}
                />
            )}
        </>
    );
};

const ExperienceEditor = ({
    status,
    data,
    insertExperience,
    updateExperience,
    closeEditor,
}) => {
    const [formData, setFormData] = useState({
        id: data?.id || '',
        organization: data?.organization || '',
        role: data?.role || '',
        startMonth: data?.startMonth || '',
        endMonth: data?.endMonth || '',
        startYear: data?.startYear || '',
        endYear: data?.endYear || '',
        city: data?.city || '',
        state: data?.state || '',
        description: data?.description || '',
    });

    const onAddExperience = () => {
        insertExperience(formData);
        closeEditor();
    };

    const onChangeExperience = (field, newValue) => {
        setFormData((prev) => ({
            ...prev,
            [field]: newValue,
        }));
    };

    const onEditExperience = () => {
        updateExperience(formData.id, formData);
        closeEditor();
    };

    return (
        <div className='experienceEditor'>
            <div className='mb-4'>
                <label htmlFor='organization' className='block text-sm font-medium text-gray-700 mb-2'>Organization</label>
                <input
                    type='text'
                    name='organization'
                    id='organization'
                    onChange={(e) => {
                        onChangeExperience('organization', e.target.value);
                    }}
                    value={formData.organization}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='role' className='block text-sm font-medium text-gray-700 mb-2'>Role</label>
                <input
                    type='text'
                    name='role'
                    id='role'
                    onChange={(e) => {
                        onChangeExperience('role', e.target.value);
                    }}
                    value={formData.role}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='startMonth' className='block text-sm font-medium text-gray-700 mb-2'>Start Month</label>
                <input
                    type='text'
                    name='startMonth'
                    id='startMonth'
                    onChange={(e) => {
                        onChangeExperience('startMonth', e.target.value);
                    }}
                    value={formData.startMonth}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='startYear' className='block text-sm font-medium text-gray-700 mb-2'>Start Year</label>
                <input
                    type='number'
                    name='startYear'
                    id='startYear'
                    onChange={(e) => {
                        onChangeExperience('startYear', e.target.value);
                    }}
                    value={formData.startYear}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='endMonth' className='block text-sm font-medium text-gray-700 mb-2'>End Month</label>
                <input
                    type='text'
                    name='endMonth'
                    id='endMonth'
                    onChange={(e) => {
                        onChangeExperience('endMonth', e.target.value);
                    }}
                    value={formData.endMonth}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='endYear' className='block text-sm font-medium text-gray-700 mb-2'>End Year</label>
                <input
                    type='number'
                    name='endYear'
                    id='endYear'
                    onChange={(e) => {
                        onChangeExperience('endYear', e.target.value);
                    }}
                    value={formData.endYear}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='city' className='block text-sm font-medium text-gray-700 mb-2'>City</label>
                <input
                    type='text'
                    name='city'
                    id='city'
                    onChange={(e) => {
                        onChangeExperience('city', e.target.value);
                    }}
                    value={formData.city}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='state' className='block text-sm font-medium text-gray-700 mb-2'>State</label>
                <input
                    type='text'
                    name='state'
                    id='state'
                    onChange={(e) => {
                        onChangeExperience('state', e.target.value);
                    }}
                    value={formData.state}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
            </div>

            <div className='mb-4'>
                <label htmlFor='description' className='block text-sm font-medium text-gray-700 mb-2'>Description</label>
                <textarea
                    name='description'
                    id='description'
                    rows='4'
                    onChange={(e) => {
                        onChangeExperience('description', e.target.value);
                    }}
                    value={formData.description}
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical'
                />
            </div>

            <div className='flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-3'>
                {status === 'adding' ? (
                    <button type='button' onClick={() => onAddExperience()} className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'>
                        Add
                    </button>
                ) : status === 'editing' ? (
                    <button type='button' onClick={() => onEditExperience()} className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'>
                        Save
                    </button>
                ) : (
                    ''
                )}
                <button type='button' onClick={() => closeEditor()} className='w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors'>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ExperienceInput;
