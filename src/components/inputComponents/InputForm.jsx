import GeneralInput from './GeneralInput';
import EducationalInput from './EducationalInput';
import PracticalInput from './PracticalInput';

export default function InputFields() {
    return (
        <div className='inputFields flex flex-col flex-nowrap gap-10 border border-solid'>
            <GeneralInput />
            <EducationalInput />
            <PracticalInput />
        </div>
    );
}
