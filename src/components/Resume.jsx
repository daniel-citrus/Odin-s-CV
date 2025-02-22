import GeneralOutput from './resumeSections/GeneralOutput';
import EducationalOutput from './resumeSections/EducationalOutput';
import PracticalOutput from './resumeSections/PracticalOutput';

export default function Resume() {
    return (
        <form className='resume flex flex-col flex-nowrap gap-10 border border-solid border-amber-600'>
            <GeneralOutput />
            <EducationalOutput />
            <PracticalOutput />
        </form>
    );
}
