export default function InputFieldCards({ cardClass, children }) {
    return (
        <div
            className={`inputCard ${cardClass}`}
        >
            {children}
        </div>
    );
}
