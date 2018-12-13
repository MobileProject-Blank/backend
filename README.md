# blank backend

Backend for our school project created with Node.js, Express.js and mongoDB. Includes API Endpoints for events, tags and guidelines.

## Running the project

Make sure you have downloaded:

* [MondoDB](https://www.mongodb.com)
* [Node.js + npm](https://nodejs.org/en/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

Clone this repository into new folder through terminal:
```
git clone https://github.com/MobileProject-Blank/backend.git
```
Start mongoDB server:
```
mongod
```
Go to repo folder:
```
cd backend
```
Install dependencies:
```
npm install
```
run server:
```
npm start
```
or if you have nodemon installed
```
nodemon index
```
If everything works well i should get message:
```
Running BLANK back-end on port 8080
```

## API endpoints:
```
/events
/events/:event_id
/tags
/tags/:tag_id
/guidelines
/guidelines/:guideline_id
```
