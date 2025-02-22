export default function GeneralOutput({ name, email, phone, website }) {
    return (
        <div className='general'>
            <div className='name'>{name}</div>
            <ul className='generalInfo flex flex-row flex-nowrap gap-5'>
                <li className='email'>{email}</li>
                <li className='phone'>{phone}</li>
                <li className='website'>{website}</li>
            </ul>
        </div>
    );
}
