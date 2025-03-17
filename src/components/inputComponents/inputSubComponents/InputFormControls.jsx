import Button from './Button';

export default function InputFormControls({
    enableAdd = false,
    enableSave = false,
    enableClear = false,
    enableCancel = false,
    handleAdd,
    handleSave,
    handleClear,
    handleCancel,
}) {
    return (
        <div className='inputFormButtons flex flex-col'>
            {enableAdd && <Button handler={handleAdd}>Add</Button>}
            {enableSave && <Button handler={handleSave}>Save</Button>}
            {enableClear && <Button handler={handleClear}>Clear</Button>}
            {enableCancel && <Button handler={handleCancel}>Cancel</Button>}
        </div>
    );
}
