# Recruitment task
## Setup

There're 2 directories: 
- backend
- frontend

for both of them it's required to make `npm install` so to make it easier just run `npm install` in main directory

## Start backend

(from main directory)
1. `cd backend`
2. `npm start`

It will start the backend server on localhost with selected port `8000`

## Start frontend

(from main directory)
1. `cd frontend`
2. `npm start`

It will start the frontend app on localhost:3000. 

## Run prepared tests

For both environments:
- in backend / frontend directory run `npm test`*

*for React and Cypress, both servers have to run in the background, so first turn on backend and frontend, then run cypress tests.
