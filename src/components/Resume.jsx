import GeneralOutput from './resumeSections/GeneralOutput';
import EducationalOutput from './resumeSections/EducationalOutput';
import PracticalOutput from './resumeSections/PracticalOutput';

export default function Resume(props) {
    return (
        <form className='resume flex flex-col flex-nowrap gap-10 border border-solid'>
            <GeneralOutput {...props} />
            <EducationalOutput {...props} />
            <PracticalOutput {...props} />
        </form>
    );
}
