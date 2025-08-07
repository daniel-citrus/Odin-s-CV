import InputContainer from './input/InputContainer';
import OutputContainer from './output/OutputContainer';
import DataContextWrapper from '../contexts/DataContext';

const ResumeBuilder = () => {
    return (
        <DataContextWrapper>
            <InputContainer />
            <OutputContainer />
        </DataContextWrapper>
    );
};

export default ResumeBuilder;
