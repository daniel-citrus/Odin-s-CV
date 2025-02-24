import { useContext, useState } from 'react';
import { DataContext } from '../DataContext';
import InputListControls from './inputControls/InputListControls';

export default function PracticalInput() {
    const { practicalData, setPracticalData } = useContext(DataContext);
    /* ID of data line that is currently being edited */
    const [editing, setEditing] = useState(null);

    const [employer, setEmployer] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [workStartDate, setWorkStartDate] = useState('');
    const [workEndDate, setWorkEndDate] = useState('');

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;

        switch (target.name) {
            case 'employer':
                setEmployer(value);
                break;
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'workStartDate':
                setWorkStartDate(value);
                break;
            case 'workEndDate':
                setWorkEndDate(value);
                break;
        }

        if (editing === null) {
            return false;
        }

        const updatedData = updatePracticalData(editing, {
            [target.name]: value,
        });

        setPracticalData(updatedData);
    };

    /**
     *
     * @param {integer} editing
     * @param {object} newData - object containing updated data property
     * @returns
     */
    function updatePracticalData(editing, newData) {
        return practicalData.map((pd) => {
            if (pd.id === editing) {
                return { ...pd, ...newData };
            } else {
                return pd;
            }
        });
    }

    const handleDelete = (id) => {
        if (practicalData.size) {
            return;
        }

        setPracticalData(practicalData.filter((pd) => pd.id !== id));
    };

    const handleEdit = (id) => {
        const data = practicalData.find((pd) => pd.id === id);

        if (data === undefined) {
            return;
        }

        setEditing(id);
        setEmployer(data.employer);
        setTitle(data.title);
        setDescription(data.description);
        setWorkStartDate(data.workStartDate);
        setWorkEndDate(data.workEndDate);
    };

    return (
        <div className='practical'>
            <ul className='practicalDataList'>
                {practicalData.map((pd) => {
                    return (
                        <li key={pd.id}>
                            <div className='informagtion'>
                                <div className='employer'>{pd.employer}</div>
                                <div className='title'>{pd.title}</div>
                                <div className='workStartDate'>
                                    {pd.workStartDate}
                                </div>
                                <div className='workEndDate'>
                                    {pd.workEndDate}
                                </div>
                            </div>
                            <InputListControls
                                editing={editing}
                                id={pd.id}
                                handleEdit={() => handleEdit(pd.id)}
                                handleDelete={() => handleDelete(pd.id)}
                            />
                        </li>
                    );
                })}
            </ul>
            <form className='flex flex-col flex-nowrap'>
                <label htmlFor='employer'>Employer</label>
                <input
                    type='text'
                    id='employer'
                    name='employer'
                    placeholder='Employer'
                    value={employer}
                    onChange={handleChange}
                />
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Job Title'
                    value={title}
                    onChange={handleChange}
                />
                <label htmlFor='description'>Job Description</label>
                <textarea
                    type='text'
                    id='description'
                    name='description'
                    placeholder='Job Description'
                    maxLength='500'
                    value={description}
                    onChange={handleChange}
                />
                <label htmlFor='workStartDate'>Start Date</label>
                <input
                    type='date'
                    id='workStartDate'
                    name='workStartDate'
                    placeholder='Start Date'
                    value={workStartDate}
                    onChange={handleChange}
                />
                <label htmlFor='workEndDate'>End Date</label>
                <input
                    type='date'
                    id='workEndDate'
                    name='workEndDate'
                    placeholder='End Date'
                    value={workEndDate}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}
