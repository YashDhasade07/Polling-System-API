Polling System API
A simple Node.js-based API for creating and managing polls, where users can create questions with options, add votes, and view poll results. This API is designed without user authentication, allowing anyone to interact with it freely.

Project Overview
Time Taken: 5 hours (Good enough completion time: 3 hours + 1 hour for finalizing)
Tech Stack: Node.js, Express, MongoDB (or your choice of database)
Key Features: Create questions, add options, vote on options, view poll results.
Extra Points: Well-commented code, scalable folder structure, and a comprehensive README.md file.
Features
Create a Question: Add new questions to the polling system.
Add Options to a Question: Add multiple options to a specific question.
Add a Vote: Increment the vote count for a specific option.
Delete a Question: Delete a question (with a constraint that it can't be deleted if any of its options have votes).
Delete an Option: Delete an option (with a constraint that it can't be deleted if it has votes).
View a Question: Retrieve a question along with its options and the total votes for each option.
API Endpoints
POST /questions/create - Create a new question.
POST /questions/:id/options/create - Add options to a specific question.
DELETE /questions/:id/delete - Delete a question (optional constraint: can't delete if any option has votes).
DELETE /options/:id/delete - Delete an option (optional constraint: can't delete if it has votes).
POST /options/:id/add_vote - Increment the vote count for a specific option.
GET /questions/:id - View a question and its options with vote counts.
Example API Response
A sample response when viewing a question with its options:

json
{
    "id": 1,
    "title": "Who is your favorite from the Ninjas Mentors",
    "options": [
        {
            "id": 1,
            "text": "Aakash Tyagi",
            "votes": 100,
            "link_to_vote": "http://localhost:8000/options/1/add_vote"
        },
        {
            "id": 2,
            "text": "Parikh Jain",
            "votes": 101,
            "link_to_vote": "http://localhost:8000/options/2/add_vote"
        },
        {
            "id": 3,
            "text": "Ankush Singla",
            "votes": 102,
            "link_to_vote": "http://localhost:8000/options/3/add_vote"
        },
        {
            "id": 4,
            "text": "Nidhi",
            "votes": 110,
            "link_to_vote": "http://localhost:8000/options/4/add_vote"
        }
    ]
}
Getting Started
Follow these instructions to set up the project on your local machine:

Prerequisites
Node.js (v12 or higher)
MongoDB or your choice of database
Installation
Clone the repository:

bash
git clone https://github.com/your-username/polling-system-api.git
cd polling-system-api
Install dependencies:

bash
npm install
Create a .env file: (if using environment variables)

env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/polling-system
Start the server:

bash
npm start
The server will run on http://localhost:8000.

Project Structure
The project follows a scalable folder structure:

bash
polling-system-api/
│
├── controllers/        # Handles the logic for each API endpoint
│   ├── questionController.js
│   └── optionController.js
│
├── models/             # Defines the data schema for questions and options
│   ├── question.model.js
│   └── option.model.js
│
├── routes/             # Defines API routes for questions and options
│   ├── questionRoutes.js
│   └── optionRoutes.js
│
├── .env                # Environment variables (not included in the repo)
├── app.js              # Main application setup
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
Usage
Create a question:

http
POST /questions/create
Content-Type: application/json
{
    "title": "Your question here"
}
Add an option to a question:

http
POST /questions/:id/options/create
Content-Type: application/json
{
    "option": "Your option text here"
}
Add a vote to an option:

http
POST /options/:id/add_vote
View a question with its options:

http
GET /questions/:id
Delete a question:

http
DELETE /questions/:id/delete
Delete an option:

http
DELETE /options/:id/delete
Notes
The link_to_vote for each option is dynamically generated when an option is created.
This project does not include user authentication, but it can be added as an enhancement if needed.
Feel free to extend the project by adding features such as user login, JWT-based authentication, or admin controls.