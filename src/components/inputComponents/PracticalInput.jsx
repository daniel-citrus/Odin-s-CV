import { useContext, useState } from 'react';
import { DataContext } from '../DataContext';
import { v4 as uuid4 } from 'uuid';

import InputListControls from './inputSubComponents/InputListControls';
import InputFormControls from './inputSubComponents/InputFormControls';
import InputDataList from './inputSubComponents/DataList';
import InputFieldCards from './InputFieldCards';

export default function PracticalInput() {
    const { practicalData, setPracticalData } = useContext(DataContext);

    const [prevData, setPrevData] = useState({}); // Store previous data incase of edit cancel
    const [mode, setMode] = useState('idle'); // 'idle', 'add', or 'edit'
    const [employer, setEmployer] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [workStartDate, setWorkStartDate] = useState('');
    const [workEndDate, setWorkEndDate] = useState('');

    const handleAddNewData = () => {
        clearForm();
        setMode('add');
    };

    const handleAdd = () => {
        const newID = uuid4();

        setMode('idle');
        setPracticalData([
            ...practicalData,
            {
                id: newID,
                employer,
                title,
                description,
                workStartDate,
                workEndDate,
            },
        ]);

        clearForm();
    };

    const handleSave = () => {
        setMode('idle');
        setPrevData({});
        clearForm();
    };

    const handleCancel = () => {
        setPrevData({});
        setMode('idle');
        clearForm();
        setPracticalData(updatePracticalData(prevData.id, prevData));
    };

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

        if (mode === null) {
            return false;
        }

        const updatedData = updatePracticalData(prevData.id, {
            [target.name]: value,
        });

        setPracticalData(updatedData);
    };

    function clearForm() {
        setEmployer('');
        setTitle('');
        setDescription('');
        setWorkStartDate('');
        setWorkEndDate('');
    }

    /**
     * Replace existing data with newData using data id
     * @param {integer} id - ID of data being updated
     * @param {object} newData - object containing updated data property
     * @returns
     */
    function updatePracticalData(id, newData) {
        return practicalData.map((pd) => {
            if (pd.id === id) {
                return { ...pd, ...newData };
            } else {
                return pd;
            }
        });
    }

    const handleClear = () => {
        const data = practicalData.find((pd) => pd.id === prevData.id);

        if (data === undefined) {
            return;
        }

        clearForm();

        setPracticalData(
            practicalData.map((pd) => {
                if (pd.id === data.id) {
                    return {
                        id: pd.id,
                        employer: '',
                        title: '',
                        description: '',
                        workStartDate: '',
                        workEndDate: '',
                    };
                }
                return pd;
            })
        );
    };

    const handleDelete = (id) => {
        setPracticalData(practicalData.filter((pd) => pd.id !== id));

        if (id !== prevData.id) {
            return;
        }

        setMode('idle');
        setPrevData({});
        clearForm();
    };

    const handleEdit = (id) => {
        const data = practicalData.find((pd) => pd.id === id);

        if (data === undefined) {
            return;
        }

        setPrevData({ ...data }); // remember previous data
        setMode('edit');
        setEmployer(data.employer);
        setTitle(data.title);
        setDescription(data.description);
        setWorkStartDate(data.workStartDate);
        setWorkEndDate(data.workEndDate);
    };

    return (
        <InputFieldCards cardClass={'practical'}>
            <InputDataList handleAddNewData={handleAddNewData}>
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
                                disableEdit={pd.id === prevData.id}
                                handleEdit={() => handleEdit(pd.id)}
                                handleDelete={() => handleDelete(pd.id)}
                            />
                        </li>
                    );
                })}
            </InputDataList>
            {mode === 'idle' ? (
                ''
            ) : (
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
            )}
            <InputFormControls
                enableAdd={mode === 'add'}
                enableSave={mode === 'edit'}
                enableCancel={mode !== 'idle'}
                enableClear={mode != 'idle'}
                handleAdd={handleAdd}
                handleSave={handleSave}
                handleCancel={handleCancel}
                handleClear={handleClear}
            />
        </InputFieldCards>
    );
}
