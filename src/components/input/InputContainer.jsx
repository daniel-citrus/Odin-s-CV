import { useState } from 'react';
import TechnologyTemplate from './forms/TechnologyTemplate';

const InputContainer = () => {
    const [template, setTemplate] = useState(null);

    const templates = [
        { id: 'tech', title: 'Technology' },
        { id: 'finance', title: 'Finance' },
    ];

    const handleTemplateChange = (val) => {
        setTemplate(val);
    };

    return (
        <>
            <TemplateSelector
                onTemplateChange={(val) => {
                    handleTemplateChange(val);
                }}
            />
        </>
    );
};

export default InputContainer;
