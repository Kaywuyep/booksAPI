## BOOKS API

A simple CRUD API, 
- Requirements
1. Set up an Express application with the following endpoints:
- GET /api/books: Retrieve a list of books.
- GET /api/books/:id: Retrieve a single book by ID.
- POST /api/books: Add a new book.
- PUT /api/books/:id: Update an existing book by ID.
- DELETE /api/books/:id: Delete a book by ID.
2. Use Swagger to document the API. The documentation should include:
- Endpoints with descriptions.
- Request parameters and bodies where applicable.
- Response structures and examples.
3. Implementation Details:
- Books should have the following properties: id, title, author, publishedDate, and summary.
- Use an in-memory array to store the list of books (no database required).
