export default function EducationalOutput({
    school,
    study,
    studyStartDate,
    studyEndDate,
}) {
    return (
        <div className='educational'>
            <div className='school'>{school}</div>
            <div className='study'>{study}</div>
            <div className='studyStartDate'>{studyStartDate}</div>
            <div className='studyEndDate'>{studyEndDate}</div>
        </div>
    );
}
