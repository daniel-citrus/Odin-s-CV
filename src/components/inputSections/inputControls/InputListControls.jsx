export default function InputListControls({
    disable,
    currentlyEditingID,
    handleEdit,
    handleDelete,
}) {
    return (
        <div className='inputListItemControls'>
            <button
                type='button'
                className={disable ? 'bg-zinc-700' : ''}
                disabled={disable}
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
