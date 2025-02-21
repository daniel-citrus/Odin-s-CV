import General from './inputFields/General';
import Educational from './inputFields/Educational';
import Practical from './inputFields/Practical';

export default function InputForm() {
    return (
        <form className='inputForm flex flex-col flex-nowrap gap-10 border border-solid'>
            <General />
            <Educational />
            <Practical />
        </form>
    );
}
