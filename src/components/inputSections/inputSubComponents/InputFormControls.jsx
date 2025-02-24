export default function InputFormControls({
    enableAdd,
    enableSave,
    enableCancel,
    handleAdd,
    handleSave,
    handleCancel,
}) {
    return (
        <div className='inputFormButtons'>
            {enableAdd && (
                <button type='button' onClick={handleAdd}>
                    Add
                </button>
            )}
            {enableSave && (
                <button type='button' onClick={handleSave}>
                    Save
                </button>
            )}
            {enableCancel && (
                <button type='button' onClick={handleCancel}>
                    Cancel
                </button>
            )}
        </div>
    );
}
