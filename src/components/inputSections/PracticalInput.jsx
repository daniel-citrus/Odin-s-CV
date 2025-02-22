export default function PracticalInput({
    employer,
    title,
    description,
    workStartDate,
    workEndDate,
    handleChange,
}) {
    return (
        <fieldset className='flex flex-col flex-nowrap'>
            <p>
                {employer} {title} {description} {startDate} {endDate}
            </p>
            <input
                type='text'
                id='employer'
                name='employer'
                placeholder='Employer'
                value={employer}
                onChange={handleChange}
            />
            <input
                type='text'
                id='title'
                name='title'
                placeholder='Job Title'
                value={title}
                onChange={handleChange}
            />

            <textarea
                type='text'
                id='description'
                name='description'
                placeholder='Job Description'
                maxLength='500'
                value={description}
                onChange={handleChange}
            />

            <input
                type='date'
                id='workStartDate'
                name='workStartDate'
                placeholder='Start Date'
                value={workStartDate}
                onChange={handleChange}
            />

            <input
                type='date'
                id='workEndDate'
                name='workEndDate'
                placeholder='End Date'
                value={workEndDate}
                onChange={handleChange}
            />
        </fieldset>
    );
}
