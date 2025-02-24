export default function InputFormControls({ status, handleAdd, handleCancel }) {
    return (
        <div className='inputFormButtons'>
            {status === 'adding' ?? (
                <button type='button' onClick={handleAdd}>
                    Add
                </button>
            )}
            {status === 'editing' ?? (
                <button type='button' onClick={handleCancel}>
                    Cancel
                </button>
            )}
        </div>
    );
}
