export default function InputFieldCards({ cardClass, children }) {
    return (
        <div
            className={`inputCard ${cardClass} border-solid rounded-md border-black`}
        >
            {children}
        </div>
    );
}
