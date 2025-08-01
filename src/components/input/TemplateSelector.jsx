const TemplateSelector = ({ templates, onTemplateChange }) => {
    return (
        <div className='templateSelector'>
            <label for='template'>Template: </label>
            <select
                onChange={(e) => onTemplateChange(e.target.value)}
                name='template'
                id='template'
            >
                {
                    <option disabled selected value>
                        {' '}
                        -- select a template --{' '}
                    </option>
                }
                {templates.map((template) => {
                    return (
                        <option
                            key={template.id}
                            value={template.id}
                            id={template.id}
                        >
                            {template.title}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default TemplateSelector;
