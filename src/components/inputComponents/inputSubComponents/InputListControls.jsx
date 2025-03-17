import Button from './Button';

export default function InputListControls({
    disableEdit,
    handleEdit,
    handleDelete,
}) {
    return (
        <div className='inputListItemControls'>
            <Button disable={disableEdit} handler={handleEdit}>
                Edit
            </Button>

            <Button handler={handleDelete}>Delete</Button>
        </div>
    );
}
