import { useContext, useState } from 'react';
import { DataContext } from '../DataContext';
import { v4 as uuid4 } from 'uuid';

import InputListControls from './inputSubComponents/InputListControls';
import InputFormControls from './inputSubComponents/InputFormControls';
import InputDataList from './inputSubComponents/InputDataList';
import InputFieldCards from './InputFieldCards';

export default function EducationalInput() {
    const { educationData, setEducationData } = useContext(DataContext);

    const [prevData, setPrevData] = useState({}); // Store previous data incase of edit cancel

    const [mode, setMode] = useState('idle'); // 'idle', 'add', or 'edit'
    const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    const [studyStartDate, setStudyStartDate] = useState('');
    const [studyEndDate, setStudyEndDate] = useState('');

    const handleAdd = () => {
        const newID = uuid4();

        setEducationData([
            ...educationData,
            {
                id: newID,
                mode,
                school,
                study,
                studyStartDate,
                studyEndDate,
            },
        ]);

        clearForm();
    };

    const handleAddNewData = () => {
        clearForm();
        setPrevData({});
        setMode('add');
    };

    const handleClear = () => {
        clearForm();

        if (prevData === null) {
            return;
        }

        setEducationData(
            educationData.map((ed) => {
                if (ed.id === prevData.id) {
                    return {
                        id: ed.id,
                        school: '',
                        study: '',
                        studyStartDate: '',
                        studyEndDate: '',
                    };
                }
                return ed;
            })
        );
    };

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;

        switch (target.name) {
            case 'school':
                setSchool(value);
                break;
            case 'study':
                setStudy(value);
                break;
            case 'studyStartDate':
                setStudyStartDate(value);
                break;
            case 'studyEndDate':
                setStudyEndDate(value);
                break;
        }

        if (mode !== 'edit') {
            return;
        }

        const newData = educationData.map((cd) => {
            if (cd.id === prevData.id) {
                return {
                    ...cd,
                    [target.name]: value,
                };
            } else {
                return cd;
            }
        });

        setEducationData(newData);
    };

    const handleCancel = () => {
        const newEducationData = educationData.map((cd) => {
            if (cd.id === prevData.id) {
                return prevData;
            } else {
                return cd;
            }
        });

        setMode('idle');
        setPrevData({});
        setEducationData(newEducationData);
        clearForm();
    };

    const handleDelete = (id) => {
        setEducationData(educationData.filter((d) => id != d.id));

        // deleting data that is currently being edited
        if (id !== prevData.id) {
            return;
        }

        setMode('idle');
        setPrevData({});
        clearForm();
    };

    const handleEdit = (id) => {
        const data = educationData.find((d) => d.id === id);

        if (data === undefined) {
            return;
        }

        setPrevData({
            ...data,
        });

        setMode('edit');
        setSchool(data.school);
        setStudy(data.study);
        setStudyStartDate(data.studyStartDate);
        setStudyEndDate(data.studyEndDate);
    };

    const handleSave = () => {
        setMode('idle');
        clearForm();

        setEducationData(
            educationData.map((ed) => {
                if (ed.id === prevData.id) {
                    return {
                        id: ed.id,
                        school,
                        study,
                        studyStartDate,
                        studyEndDate,
                    };
                }

                return ed;
            })
        );
        setPrevData({});
    };

    function clearForm() {
        setSchool('');
        setStudy('');
        setStudyStartDate('');
        setStudyEndDate('');
    }

    return (
        <InputFieldCards cardClass={'education'}>
            <h2>Education</h2>
            <InputDataList handleAddNewData={handleAddNewData}>
                {educationData.map((d) => {
                    return (
                        <li className='educationDataListItem' key={d.id}>
                            {d.school}
                            <InputListControls
                                disableEdit={d.id === prevData.id}
                                handleEdit={() => handleEdit(d.id)}
                                handleDelete={() => handleDelete(d.id)}
                            />
                        </li>
                    );
                })}
            </InputDataList>
            {mode !== 'idle' && (
                <form className=''>
                    <label htmlFor='school'>School Name</label>
                    <input
                        type='text'
                        id='school'
                        name='school'
                        placeholder='School Name'
                        value={school}
                        onChange={handleChange}
                    />
                    <label htmlFor='study'>Degree</label>
                    <input
                        type='text'
                        id='study'
                        name='study'
                        value={study}
                        placeholder='Title of Study'
                        onChange={handleChange}
                    />
                    <div className='schoolDate'>
                        <label htmlFor='studyStartDate'>Start Date</label>
                        <input
                            type='date'
                            name='studyStartDate'
                            id='studyStartDate'
                            value={studyStartDate}
                            onChange={handleChange}
                        />
                        <label htmlFor='studyEndDate'>End Date</label>
                        <input
                            type='date'
                            name='studyEndDate'
                            id='studyEndDate'
                            value={studyEndDate}
                            onChange={handleChange}
                        />
                    </div>
                    <InputFormControls
                        enableAdd={mode === 'add'}
                        enableCancel={mode !== 'idle'}
                        enableClear={mode !== 'idle'}
                        enableSave={mode === 'edit'}
                        handleAdd={handleAdd}
                        handleCancel={handleCancel}
                        handleClear={handleClear}
                        handleSave={handleSave}
                    />
                </form>
            )}
        </InputFieldCards>
    );
}
