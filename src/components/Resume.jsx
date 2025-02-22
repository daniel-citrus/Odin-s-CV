import EducationalOutput from './resumeSections/EducationalOutput';

export default function Resume() {
    return (
        <form className='resume flex flex-col flex-nowrap gap-10 border border-solid border-amber-600'>
            {/* 
            <GeneralOutput />
            <EducationalOutput />
             */}
            <PracticalOutput />
        </form>
    );
}
