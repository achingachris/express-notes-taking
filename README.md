# Express Notes Taking

A simple note taking app built with Node.js, Express.js, and SQLite. This app provides a REST API to create, read, update, and delete notes.

## Installation

1. Clone the repository:

`git clone https://github.com/achingachris/express-notes-taking.git`

2. Install dependencies:

`npm install`

3. Start the server:

`npm start`

This starts the server and listens on port 3000 by default.

## Usage

The app provides the following endpoints:

- `POST /notes` - creates a new note with the provided title and content
- `GET /notes/:id` - retrieves the note with the provided ID
- `PUT /notes/:id` - updates the note with the provided ID with the new title and content
- `DELETE /notes/:id` - deletes the note with the provided ID

The `POST` and `PUT` endpoints expect JSON data in the request body with the following structure:

```json
{
  "title": "Note title",
  "content": "Note content"
}
```

The GET and DELETE endpoints expect the note ID to be provided as a parameter in the URL.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute.

## Credits
This project was created by Chris Achinga.
