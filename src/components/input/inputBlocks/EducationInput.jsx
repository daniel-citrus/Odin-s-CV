import useEducationData from '../../../hooks/useEducationData';

const EducationInput = () => {
    const {
        educationData,
        insertNewEducationData,
        updateEducationData,
        deleteEducationData,
    } = useEducationData();

    const displayEditWindow = (data) => {};

    return (
        <ul>
            {educationData.map((data) => (
                <li key={data.id}>
                    <div className='school'>{data.school}</div>
                    <div className='gradMonth'>{data.gradMonth}</div>
                    <div className='gradYear'>{data.gradYear}</div>
                    <div className='controls'>
                        <button
                            type='button'
                            className='edit'
                            onClick={() => displayEditWindow(data)}
                        >
                            Edit
                        </button>
                        <button
                            type='button'
                            className='delete'
                            onClick={() => deleteEducationData(data.id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

const EditWindow = (data) => {
    return (
        <form action='' method='post'>
            <fieldset>
                <legend>Education Entry</legend>

                <div className='form-row'>
                    <label htmlFor='school'>School:</label>
                    <input
                        type='text'
                        id='school'
                        name='school'
                        placeholder='Enter school name'
                        value={data.school}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='degree'>Degree:</label>
                    <input
                        type='text'
                        id='degree'
                        name='degree'
                        placeholder='Enter degree'
                        value={data.degree}
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='gradMonth'>Graduation Month:</label>
                    <select id='gradMonth' name='gradMonth'>
                        <option value=''>Select month</option>
                        <option value='January'>January</option>
                        <option value='February'>February</option>
                        <option value='March'>March</option>
                        <option value='April'>April</option>
                        <option value='May'>May</option>
                        <option value='June'>June</option>
                        <option value='July'>July</option>
                        <option value='August'>August</option>
                        <option value='September'>September</option>
                        <option value='October'>October</option>
                        <option value='November'>November</option>
                        <option value='December'>December</option>
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
                        max='2050'
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
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='city'>City:</label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        placeholder='Enter city'
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='state'>State:</label>
                    <input
                        type='text'
                        id='state'
                        name='state'
                        placeholder='Enter state'
                    />
                </div>

                <div className='form-row'>
                    <label htmlFor='courseWork'>Relevant Coursework:</label>
                    <textarea
                        id='courseWork'
                        name='courseWork'
                        placeholder='Enter relevant coursework'
                        rows='3'
                    />
                </div>

                <div className='form-controls'>
                    <button type='submit'>Save</button>
                    <button type='button'>Cancel</button>
                </div>
            </fieldset>
        </form>
    );
};

export default EducationInput;
