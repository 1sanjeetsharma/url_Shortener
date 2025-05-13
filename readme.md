# URL Shortener

A simple and efficient URL shortener application.

## Features

- Shorten long URLs
- Redirect to original URLs
- Track usage statistics (optional)
- RESTful API

## Technologies Used

- Node.js / Express (or your stack)
- MongoDB (or your database)
- JavaScript

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/urlshortener.git
    cd urlshortener
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Copy `.env.example` to `.env` and update values.

4. **Run the application:**
    ```bash
    npm start
    ```

## API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|----------------------|
| POST   | `/api/shorten`   | Shorten a long URL   |
| GET    | `/:shortId`      | Redirect to original |

## License

MIT

---