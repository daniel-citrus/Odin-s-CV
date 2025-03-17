export default function Button({ children, handler, disable = false }) {
    const buttonClass = '';

    return (
        <button
            className={
                buttonClass + (disable ? 'bg-violet-400' : 'bg-indigo-400')
            }
            type='button'
            onClick={handler}
            disabled={disable}
        >
            {children}
        </button>
    );
}
