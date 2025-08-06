const InputContainer = ({ generalInfo, onGeneralInfoChange }) => {
    return (
        <>
            <fieldset>
                <legend>General Information</legend>

                <div>
                    <label htmlFor='name'>Full Name:</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={generalInfo.name}
                        placeholder='Enter your full name'
                        onChange={(e) => onNameChange(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={generalInfo.email}
                        placeholder='Enter your email address'
                        onChange={(e) => onEmailChange(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor='phone'>Phone Number:</label>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={generalInfo.phone}
                        onChange={(e) => {
                            onPhoneChange(e.target.value);
                        }}
                    />
                </div>
            </fieldset>
        </>
    );
};

export default InputContainer;
