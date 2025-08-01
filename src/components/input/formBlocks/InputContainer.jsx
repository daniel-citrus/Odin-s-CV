import { useState } from 'react';
import TechnologyForm from '../forms/TechnologyForm';
import FinanceForm from '../forms/FinanceForm';
import TemplateSelector from '../TemplateSelector';

const InputContainer = () => {
    const templates = [
        { id: 'finance', title: 'Finance', template: FinanceForm },
        { id: 'tech', title: 'Technology', template: TechnologyForm },
    ];

    const [templateId, setTemplateId] = useState(null);

    const SelectedTemplate = templates.find(
        (temp) => templateId === temp.id
    )?.template;

    const handleTemplateChange = (val) => {
        setTemplateId(val);
    };

    return (
        <>
            <TemplateSelector
                templates={templates}
                onTemplateChange={(val) => {
                    handleTemplateChange(val);
                }}
            />
            {SelectedTemplate ? <SelectedTemplate /> : 'filler'}
        </>
    );
};

export default InputContainer;
