import GeneralInput from './GeneralInput';
import EducationalInput from './EducationalInput';
import PracticalInput from './PracticalInput';

export default function InputFields() {
    return (
        <div className='inputFields'>
            <GeneralInput />
            <EducationalInput />
            <PracticalInput />
        </div>
    );
}
