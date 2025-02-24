export default function InputListControls({
    editing,
    id,
    handleEdit,
    handleDelete,
}) {
    return (
        <div className='inputListItemControls'>
            <button
                type='button'
                className={editing === id ?? 'bg-zinc-700'}
                disabled={editing === id}
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
