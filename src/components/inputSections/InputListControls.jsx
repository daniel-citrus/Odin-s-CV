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
                className={editing === id ? 'bg-zinc-700' : ''}
                disabled={editing === id}
                onClick={() => handleEdit(id)}
            >
                Edit
            </button>

            <button type='button' onClick={() => handleDelete(id)}>
                Delete
            </button>
        </div>
    );
}
