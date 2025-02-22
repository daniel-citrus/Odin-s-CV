import { useContext, useState } from 'react';
import { DataContext } from '../DataContext';
import { v4 as uuid4 } from 'uuid';

export default function EducationalInput() {
    const { data: educationData, setData: setEducationData } =
        useContext(DataContext);
    // ID of data being edited
    const [currentId, setCurrentId] = useState(null);
    
    const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    const [studyStartDate, setStudyStartDate] = useState('');
    const [studyEndDate, setStudyEndDate] = useState('');
    const [editing, setEditing] = useState(false);
    const [prevData, setPrevData] = useState({});

    const handleChange = (e) => {
        const target = e.target;

        switch (target.name) {
            case 'school':
                setSchool(target.value);
                break;
            case 'study':
                setStudy(target.value);
                break;
            case 'studyStartDate':
                setStudyStartDate(target.value);
                break;
            case 'studyEndDate':
                setStudyEndDate(target.value);
                break;
        }

        if (currentId === null) {
            return;
        }

        const newData = educationData.map((cd) => {
            if (cd.id === currentId) {
                return {
                    ...cd,
                    [target.name]: target.value,
                };
            } else {
                return cd;
            }
        });

        setEducationData(newData);
    };

    const handleCancel = () => {
        setEditing(false);

        const newData = educationData.map((cd) => {
            if (cd.id === currentId) {
                return prevData;
            } else {
                return cd;
            }
        });

        setCurrentId(null);
        setPrevData({});
        setEducationData(newData);
    };

    const handleDelete = (id) => {
        setEducationData(educationData.filter((d) => id != d.id));
    };

    const handleEdit = (id) => {
        const data = educationData.find((d) => d.id === id);
        setEditing(true);

        if (data === undefined) {
            return;
        }

        setPrevData({
            id: data.id,
            school: data.school,
            study: data.study,
            studyStartDate: data.studyStartDate,
            studyEndDate: data.studyEndDate,
        });

        setCurrentId(id);
        setSchool(data.school);
        setStudy(data.study);
        setStudyStartDate(data.studyStartDate);
        setStudyEndDate(data.studyEndDate);
    };

    return (
        <div className='education'>
            <ul className='educationList'>
                {educationData.map((d) => {
                    return (
                        <li className='educationDataLine' key={d.id}>
                            {d.school}
                            {editing && currentId === d.id ? (
                                <button type='button' onClick={handleCancel}>
                                    Cancel
                                </button>
                            ) : (
                                <button
                                    type='button'
                                    onClick={() => handleEdit(d.id)}
                                >
                                    Edit
                                </button>
                            )}
                            <button
                                type='button'
                                onClick={() => handleDelete(d.id)}
                            >
                                Delete
                            </button>
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
            </form>
        </div>
    );
}
