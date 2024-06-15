function FormRow({ label, error, children }) {
    return (
        <div className="mb-2">
            {label && (
                <label
                    htmlFor={children.props.id}
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            {children}
            {error && (
                <h6 className="mt-1 text-xs font-bold text-error">{error}</h6>
            )}
        </div>
    );
}

export default FormRow;
