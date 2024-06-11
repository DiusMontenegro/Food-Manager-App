function CreateItem({ showModal }) {
    return (
        <form>
            <h1 className="text-xl font-bold">Create Item</h1>

            <input
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={showModal}
                value="Cancel"
            />
        </form>
    );
}

export default CreateItem;
