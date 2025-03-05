export default function InputDataList({ children, handleAddNewData }) {
    return (
        <div className='dataListContainer'>
            <ul className='inputDataList'>{children}</ul>
            <div className='dataListControls'>
                <button type='button' onClick={handleAddNewData}>
                    +
                </button>
            </div>
        </div>
    );
}
