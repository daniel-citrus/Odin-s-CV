import InputContainer from './input/InputContainer';
import { useState } from 'react';

const ResumeBuilder = () => {
    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        pheon: '',
    });

    const onGeneralInfoChange = (id, value) => {
        setGeneralInfo({
            ...generalInfo,
            [id]: value,
        });
    };

    return (
        <>
            <InputContainer
                generalInfo={generalInfo}
                onGeneralInfoChange={onGeneralInfoChange}
            />
        </>
    );
};

export default ResumeBuilder;
