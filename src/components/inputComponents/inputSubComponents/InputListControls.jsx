import Button from './Button';
import trash from '../../../assets/bin.png';
import edit from '../../../assets/edit.png';

export default function InputListControls({
    disableEdit,
    handleEdit,
    handleDelete,
}) {
    return (
        <div className='inputListItemControls flex flex-row'>
            <Button disable={disableEdit} handler={handleEdit}>
                <img src={edit} title='edit' alt='' />
            </Button>

            <Button handler={handleDelete}>
                <img src={trash} title='delete' alt='' />
            </Button>
        </div>
    );
}
