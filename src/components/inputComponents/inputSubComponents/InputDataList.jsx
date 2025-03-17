import Button from './Button';

export default function InputDataList({ children, handleAddNewData }) {
    return (
        <div className='dataListContainer'>
            <ul className='inputDataList'>{children}</ul>
            <div className='dataListControls'>
                <Button handler={handleAddNewData}>+</Button>
            </div>
        </div>
    );
}
