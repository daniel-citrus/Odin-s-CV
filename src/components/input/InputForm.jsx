import General from './General';
import Educational from './Educational';
import Practical from './Practical';

export default function InputForm() {
    return (
        <form className='inputForm flex flex-col flex-nowrap gap-10 border border-solid'>
            <General />
            <Educational />
            <Practical />
        </form>
    );
}
