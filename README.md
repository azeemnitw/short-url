# Short URL Service

This repository contains the code for a simple URL shortening service built with React and Node.js.

## Features

- Shorten long URLs
- Redirect to original URLs using the shortened version
- Track the number of times a shortened URL has been accessed

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/short-url.git
    cd short-url
    ```

2. Install dependencies for the server:
    ```sh
    cd server
    npm install
    ```

3. Install dependencies for the client:
    ```sh
    cd ../client
    npm install
    ```

## Usage

1. Start the server:
    ```sh
    cd server
    npm start
    ```

2. Start the client:
    ```sh
    cd ../client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to use the URL shortening service.

## API Endpoints

- `POST /api/shorten`: Shorten a long URL.
- `GET /:shortUrl`: Redirect to the original URL.
- `GET /api/stats/:shortUrl`: Get statistics for a shortened URL.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.