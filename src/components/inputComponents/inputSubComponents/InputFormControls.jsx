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
            {enableClear && (
                <button type='button' onClick={handleClear}>
                    Clear
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
