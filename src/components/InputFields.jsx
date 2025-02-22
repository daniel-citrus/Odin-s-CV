import GeneralInput from './inputSections/GeneralInput';
import EducationalInput from './inputSections/EducationalInput';
import PracticalInput from './inputSections/PracticalInput';

export default function InputFields() {
    return (
        <div className='inputFields flex flex-col flex-nowrap gap-10 border border-solid'>
            <GeneralInput />
            <EducationalInput />
            <PracticalInput />
        </div>
    );
}
