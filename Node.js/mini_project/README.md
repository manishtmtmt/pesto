# Blog Management Backend Service

This Node.js project is a backend service for a Blog Management Platform, providing essential functionalities for user management and blog post management. It utilizes Express.js, Bcryptjs, Jsonwebtoken, and Mongoose for efficient development.

## Functionalities

#### 1. User Management:

- Sign up a new account
- Sign in with username and password
- Get specific user details

#### 2. Blog Post Management:

- Create a new blog post
- Get all blog posts
- Get a specific blog post
- Update a specific blog post
- Delete a specific blog post

## API Endpoints

#### User Management

| Methods | Urls                | Actions                               |
| ------- | ------------------- | ------------------------------------- |
| POST    | /api/auth/sign-up   | Sign up a new user account.           |
| POST    | /api/auth/sign-in:  | Sign in with a username and password. |
| GET     | /api/auth/{userId}: | Get specific user details.            |

#### Blog Post Management

| Methods | Urls                 | Actions                      |
| ------- | -------------------- | ---------------------------- |
| POST    | /api/posts:          | Create a new blog post.      |
| GET     | /api/posts:          | Get all blog posts.          |
| GET     | /api/posts/{postId}: | Get a specific blog post.    |
| PATCH   | /api/posts/{postId}: | Update a specific blog post. |
| DELETE  | /api/posts/{postId}: | Delete a specific blog post. |

## Technology Stack

- Express.js: A web application framework for Node.js.
- Bcryptjs: A library for hashing and salting passwords.
- Jsonwebtoken: A library for creating JSON Web Tokens for user authentication.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB.

## How to Run

Follow these steps to run the project locally:

#### 1. Clone this repository.

```bash
git clone
```
#### 2. Navigate to the project folder using your command line interface.

```bash
cd 
```

#### 3. Install the project dependencies by running the following command:

```bash
npm install
```

#### 4. Start the development server with:

```bash
npm run dev
```
## Documentation

The project is documented with Swagger, providing detailed information about the available endpoints and their usage. You can access the Swagger documentation by visiting `/api-docs` when the server is running.

Additionally, a Postman collection is provided, allowing you to test the API endpoints easily.

## Using the Postman Collection

- Click [here](https://api.postman.com/collections/21798262-d12c3290-b7b4-444f-ad0f-367638562082?access_key=PMAT-01HE21GH9WKZXG831BGPW50CVK) to access the Postman collection.

1. Make sure you have [Postman](https://www.postman.com/) installed and registered.
2. Click the Postman collection link above to open it in Postman.
3. In Postman, click the "Import" button to add the collection to your workspace.

#### Signup a new user account [POST - /api/auth/sign-up]

#### Sign in with a username and password [POST - /api/auth/login]

#### Get specific user details [GET - /api/auth/{userID}]

#### Create a new blog post [POST - /api/posts]

#### Get all blog posts [GET - /api/posts/{postId}]

#### Update a specific blog post [PATCH - /api/posts/{postId}]

#### Delete a specific blog post [DELETE - /api/posts/{postId}]

## Endpoint Usage

For detailed usage and examples of each API endpoint, please refer to the Swagger documentation or the Postman collection provided with this project.
