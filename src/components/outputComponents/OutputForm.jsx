import GeneralInput from '../inputComponents/GeneralInput';
import EducationalOutput from './EducationalOutput';
import PDFWindow from './PDFWindow';
import PracticalOutput from './PracticalOutput';

export default function OutputForm() {
    return (
        <div className='resume'>
            {/* <GeneralOutput />
            <EducationalOutput />
            <PracticalOutput /> */}
            <PDFWindow />
        </div>
    );
}
