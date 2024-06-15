# Food App

The **Food App** is a full-stack CRUD application built to manage food products. It allows users to create new products, view product details, update existing items, and delete specific products. The app is developed using React Query for data fetching and caching, Tailwind CSS for styling, DaisyUI for additional UI components, and Firebase as the Backend-as-a-Service (BaaS) provider for database management.

## Features

-   **Create**: Add new food products with details such as name, category, size, price, cost, and stock quantity.
-   **Read**: View detailed information of each product, including its category, size, price, and current stock.
-   **Update**: Modify existing product information, ensuring accurate and up-to-date details.
-   **Delete**: Remove specific food items from the database when no longer needed.

## Technologies Used

-   **React Query**: For efficient data fetching, caching, synchronization, and updates.
-   **Tailwind CSS**: A utility-first CSS framework used for rapid UI development and responsive design.
-   **DaisyUI**: Provides additional UI components and styles that integrate seamlessly with Tailwind CSS.
-   **Firebase**: Backend-as-a-Service (BaaS) used for real-time database management, authentication, and hosting.

## Setup Instructions

To run the Food App locally, follow these steps:

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/DreaUltimate/repository.git
    cd food-app
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Set up Firebase**:

    <ul>
           <li>Create a Firebase project at Firebase Console.</li>
           <li>Obtain your Firebase configuration settings (apiKey, authDomain, projectId, etc.).</li>
           <li>Replace the Firebase configuration in `firebase-config.js` or equivalent file in your project.</li>
    </ul>

4.  **Start the development server**:

    ```bash
    npm run dev
    ```

5.  **Open the app**:

    Open your browser and navigate to http://localhost:5173 to view the app.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request.

## Acknowledgements

-   React Query: Efficiently manage server state in React applications.
-   Tailwind CSS: Create modern and responsive UIs quickly.
-   Firebase: Powerful BaaS platform for building scalable apps.
