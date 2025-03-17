export default function Button({ children, handler, disable = false }) {
    return (
        <button
            className={disable ? 'violet-400' : 'bg-indigo-400'}
            type='button'
            onClick={handler}
            disabled={disable}
        >
            {children}
        </button>
    );
}
