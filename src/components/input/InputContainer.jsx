import useDataContext from '../../hooks/useDataContext';
import TechInputs from './inputTemplates/TechInputs';

const InputContainer = () => {
    const { generalInfo, updateGeneralInfo } = useDataContext();

    return (
        <form>
            <TechInputs
                generalInfo={generalInfo}
                onGeneralInfoChange={updateGeneralInfo}
            />
        </form>
    );
};

export default InputContainer;
