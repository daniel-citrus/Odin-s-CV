import GeneralInput from './inputSections/GeneralInput';
import EducationalInput from './inputSections/EducationalInput';
import PracticalInput from './inputSections/PracticalInput';

export default function InputForm(props) {
    return (
        <form className='inputForm flex flex-col flex-nowrap gap-10 border border-solid'>
            <GeneralInput {...props} />
            <EducationalInput {...props} />
            <PracticalInput {...props} />
        </form>
    );
}
