# Companimizer API

![HTML](https://img.shields.io/badge/-NODE-orange) ![JS](https://img.shields.io/badge/-JS-yellow) ![MongoDB](https://img.shields.io/badge/-MongoDB-darkgreen)
![NoSQL](https://img.shields.io/badge/-NoSQL-darkred) ![Mongoose](https://img.shields.io/badge/-Mongoose-purple) ![Express](https://img.shields.io/badge/Express-indigo)

![Github licence](https://img.shields.io/badge/license-MIT-blue)

## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. It is also one of the widely used technologies in full-stack applications specifically utilized to build social networking platforms. Because the foundation of these applications is data, it’s vital to understand how to build and structure the API first.

The specifc API is built for this project on the backend, for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages, it also utilizes a JavaScript date library to format timestamps.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Walkthrough Video
---

https://youtu.be/sHQ7pHObAxo

---

## Mock-up

### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`
---

![Demo of all users routes being tested in Insomnia.](./assets/demo_user.gif)

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

![Demo of adding and removing friends from users being tested in Insomnia.](./assets/add_remove_friend.gif)

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

![Demo of adding and removing friends from users being tested in Insomnia.](./assets/thought_routes.gif)

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

---

![Demo of adding and removing friends from users being tested in Insomnia.](./assets/add_remove_reaction.gif)

---

## Table-of-Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

## [Installation](#table-of-contents)

```
npm i
```
## [Usage](#table-of-contents)
This project was built in Node.js using the express, MongoDB and Mongoose packages.
```
npm start
```

Please use Insomnia to make CRUD API calls

## [Technologies](#table-of-contents)
* JS
* Node.js
* MongoDB
* Model-View-Controller
* Cookies
* Sessions

## [License](#table-of-contents)
The application is covered under the following license: [MIT](https://choosealicense.com/licenses/mit/)

## [Contributing](#table-of-contents)
To contribute to this application, create a pull request or fork the repo.

## [Questions](#table-of-contents)
If you have any question about the repo, open an issue or contact me directly at [Email: umairkhalid@fastmail.fm](mailto:umairkhalid@fastmail.fm).
You can find more of my work at [GitHub](https://github.com/umairkhalid).

---
© 2022 Umair Khalid. Confidential and Proprietary. All Rights Reserved.
