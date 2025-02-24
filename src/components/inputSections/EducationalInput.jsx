import { useContext, useState } from 'react';
import { DataContext } from '../DataContext';
import InputListControls from './inputSubComponents/InputListControls';

export default function EducationalInput() {
    const { educationData, setEducationData } = useContext(DataContext);

    const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    const [studyStartDate, setStudyStartDate] = useState('');
    const [studyEndDate, setStudyEndDate] = useState('');

    const [editing, setEditing] =
        useState(null); /* ID of educationData element that is being edited */
    const [prevData, setPrevData] = useState(
        {}
    ); /* Remember previous data for cancelled edits */

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

        if (editing === null) {
            return;
        }

        const newData = educationData.map((cd) => {
            if (cd.id === editing) {
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
            if (cd.id === editing) {
                return prevData;
            } else {
                return cd;
            }
        });

        setEditing(null);
        setPrevData({});
        setEducationData(newEducationData);
        updateFormValues({});
    };

    const handleDelete = (id) => {
        setEducationData(educationData.filter((d) => id != d.id));
    };

    const handleEdit = (id) => {
        const data = educationData.find((d) => d.id === id);

        if (data === undefined) {
            return;
        }

        setPrevData({
            ...data,
        });

        setEditing(id);
        updateFormValues(data);
    };

    function updateFormValues({
        school = '',
        study = '',
        studyStartDate = '',
        studyEndDate = '',
    }) {
        setSchool(school);
        setStudy(study);
        setStudyStartDate(studyStartDate);
        setStudyEndDate(studyEndDate);
    }

    return (
        <div className='education'>
            <h2>Education</h2>
            <ul className='educationList'>
                {educationData.map((d) => {
                    return (
                        <li className='educationDataListItem' key={d.id}>
                            {d.school}
                            <InputListControls
                                editing={editing}
                                id={d.id}
                                handleEdit={() => handleEdit(d.id)}
                                handleDelete={() => handleDelete(d.id)}
                            />
                        </li>
                    );
                })}
            </ul>
            <form className='flex flex-col flex-nowrap'>
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
                <div className='schoolDate flex flex-col flex-nowrap'>
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
                {editing !== null ? (
                    <button type='button' onClick={handleCancel}>
                        Cancel
                    </button>
                ) : (
                    ''
                )}
            </form>
        </div>
    );
}
