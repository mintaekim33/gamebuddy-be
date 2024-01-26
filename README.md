# GameBuddy 
A game reviews website where users can create, edit and delete game reviews. All users can view other users' reviews.

# Deployment Link
https://gamebuddy-fe.onrender.com/

# Technologies used for Backend
MERN Stack: MongoDB, Express.js, Node.js

# General Approach
1. Plan models to use for a full stack application
2. Create wireframe, Trello board, ERD
3. Frontend & Backend Repo set up
4. Code
5. Test and Debug
6. Deploy

# Endpoints
GET user reviews, GET user profile, PUT user profile, POST sign up, POST log in/out
![image](https://github.com/mintaekim33/gamebuddy-be/assets/142648992/9f9a24b2-cb28-41ce-9042-e39d73e4f623)
GET all reviews, GET a specific review, POST a review, PUT a review, DELETE a review
![image](https://github.com/mintaekim33/gamebuddy-be/assets/142648992/f1a8d44d-f2b8-4642-a368-c5e162dd4741)

# Schema
User:
![image](https://github.com/mintaekim33/gamebuddy-be/assets/142648992/31ee24ac-9be1-4e82-a4af-e205d5eece2f)

Review:
![image](https://github.com/mintaekim33/gamebuddy-be/assets/142648992/d3767fa9-47a8-48dc-9d92-093abe703607)

# Dependencies
express, mongoose cors, dotenv, jsonwebtoken

# User Stories
https://trello.com/b/u3f30w5L/gamebuddy

# Wireframes
https://www.figma.com/file/7lMgx5yrLnnDhB3nw0s1KP/Game-Buddy-Draft-Page?type=design&node-id=0%3A1&mode=design&t=me1SBTFpBlwZ5tSX-1

# Challenges
1. checkPermission - extracting the user id to authenticate the user
2. Mongoose methods - using the right methods for the CRUD

# Demo
Main Page
<img width="1367" alt="image" src="https://github.com/mintaekim33/gamebuddy-be/assets/142648992/44e99421-0e2b-4a8f-8f85-a10dfe7b68ae">

User Page
<img width="1420" alt="image" src="https://github.com/mintaekim33/gamebuddy-be/assets/142648992/ca1d129f-f7a0-401b-9078-2a89b6a7d019">

Edit user Profile
<img width="629" alt="image" src="https://github.com/mintaekim33/gamebuddy-be/assets/142648992/52c545ab-0c9a-4990-ab7b-9a8a3accacdc">

Sign Up
<img width="440" alt="image" src="https://github.com/mintaekim33/gamebuddy-be/assets/142648992/df4bc5f1-8935-499a-b4ce-c197715f27e4">

Log In
<img width="448" alt="image" src="https://github.com/mintaekim33/gamebuddy-be/assets/142648992/bdbcb27a-240f-42d9-99d1-13e2cd01702b">

Create reviews
<img width="438" alt="image" src="https://github.com/mintaekim33/gamebuddy-be/assets/142648992/cc8398ce-6c32-4c66-bcef-caf6a7070324">

Edit & Delete reviews
<img width="420" alt="image" src="https://github.com/mintaekim33/gamebuddy-be/assets/142648992/ce4b77ae-c011-4e39-aede-769bd9749447">

# Next Steps 
- Include logic in checkPermission function to prevent the same account from logging in from different devices
- Create a comment Schema to allow users to add comments on other users' posts


