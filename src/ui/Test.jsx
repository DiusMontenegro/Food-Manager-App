// pages/index.js
import Modal from "../components/Modal";

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="p-8">
            <h1 className="mb-4 text-2xl font-bold">
                Welcome to the Home Page
            </h1>
            <button
                className="rounded bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
                onClick={openModal}
            >
                Open Modal
            </button>
        </div>
    );
};

export default HomePage;
