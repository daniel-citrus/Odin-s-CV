export default function Educational() {
    return (
        <>
            <fieldset>
                <input
                    type='text'
                    id='school'
                    name='school'
                    placeholder='School Name'
                />
                <input
                    type='text'
                    id='major'
                    name='major'
                    placeholder='Major'
                />
                <div className='schoolDate'>
                    <input type='date' name='schoolStart' id='schoolStart' />
                    <input type='date' name='schoolEnd' id='schoolEnd' />
                </div>
            </fieldset>
        </>
    );
}
