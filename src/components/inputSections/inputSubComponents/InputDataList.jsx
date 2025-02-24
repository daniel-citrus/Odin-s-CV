export default function InputDataList({ children, addNewData }) {
    return (
        <div className='dataListContainer'>
            <ul className='inputDataList'>{children}</ul>
            <div className='dataListControls'>
                <button type='button' onClick={addNewData}>
                    +
                </button>
            </div>
        </div>
    );
}
