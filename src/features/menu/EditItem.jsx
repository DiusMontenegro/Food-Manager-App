function EditItem({ handleFormModal }) {
    return (
        <>
            <h2 className="mb-4 text-xl font-semibold">
                Are you sure you want to edit{" "}
            </h2>
            <p className="text-gray-700">This is the modal content.</p>
            <button
                className="mt-4 rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-700"
                onClick={handleFormModal}
            >
                Close Modal
            </button>
        </>
    );
}

export default EditItem;
