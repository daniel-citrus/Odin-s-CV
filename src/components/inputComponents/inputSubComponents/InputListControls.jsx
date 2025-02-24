export default function InputListControls({
    disableEdit,
    handleEdit,
    handleDelete,
}) {
    return (
        <div className='inputListItemControls'>
            <button
                type='button'
                className={disableEdit ? 'bg-zinc-700' : ''}
                disabled={disableEdit}
                onClick={handleEdit}
            >
                Edit
            </button>

            <button type='button' onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}
