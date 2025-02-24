import GeneralInput from '../inputComponents/GeneralInput';
import EducationalOutput from './EducationalOutput';
import PracticalOutput from './PracticalOutput';

export default function Resume() {
    return (
        <div className='resume flex flex-col flex-nowrap gap-10 border border-solid border-amber-600'>
            {/* 
            <GeneralOutput />
            <EducationalOutput />
             */}
            <PracticalOutput />
        </div>
    );
}
