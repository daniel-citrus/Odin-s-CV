export default function InputFieldCards({ cardClass, children }) {
    return (
        <div
            className={`inputCard ${cardClass} flex flex-col`}
        >
            {children}
        </div>
    );
}
