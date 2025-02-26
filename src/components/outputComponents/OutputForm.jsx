import GeneralInput from '../inputComponents/GeneralInput';
import EducationalOutput from './EducationalOutput';
import PDFWindow from './PDFWindow';
import PracticalOutput from './PracticalOutput';

export default function OutputForm() {
    return (
        <div className='resume flex flex-col flex-nowrap gap-10 border border-solid border-amber-600'>
            {/* <GeneralOutput />
            <EducationalOutput />
            <PracticalOutput /> */}
            {/* <PDFWindow /> */}
        </div>
    );
}
