import { useState } from 'react';
import TechnologyTemplate from './forms/TechnologyForm';
import TemplateSelector from './formBlocks/TemplateSelector';

const InputContainer = () => {
    const templates = [
        { id: 'finance', title: 'Finance', template: null },
        { id: 'tech', title: 'Technology', template: TechnologyTemplate },
    ];

    const defaultSelectedId = 'tech';

    const [template, setTemplate] = useState(templates[0].template);

    const handleTemplateChange = (val) => {
        setTemplate(val);
    };

    return (
        <>
            <TemplateSelector
                onTemplateChange={(val) => {
                    handleTemplateChange(val);
                }}
                templates={templates}
            />
        </>
    );
};

export default InputContainer;
