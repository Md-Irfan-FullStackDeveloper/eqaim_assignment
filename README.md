
# Eqaim Blog

This the blog website where user can write the blog post and read the blog post.


## Tech Stacks

**Server:** Node, Express, Mongoose and MongoDB database


## Features

- Create blog post /addBlog
- Get all blog posts


## API Reference

#### Get all Blog posts

```
  GET localhost:8080/blogs
```
To get the all blogs.

#### Get particular blog post

```
  GET localhost:8080/:blogId
```

### To add an blog post

```
  GET localhost:8080/addBlog
```
```
    {
        "title": "String",
        "content": "String",
        "images": "not required"
    }
```

Create this format to add an blog post.
## Installation and to start the project.

You can clone this repo

```
    git clone {url of the repo}
```
Than install all the packages

```
     npm install
```

### To start server do

Install nodemon 

```
    npm install nodemon -g
```
Go to the backend folder

```
    cd backend
```
Install all dependencies
```
    npm install
```

Than run the command

```
    nodemon index.js
```

### Start the frontend

Move to frontend folder
```
    cd frontend
```

Install all dependencies
```
    npm install
```

Than run the command
```
    npm start
```


## Feedback

If you have any feedback, please reach out to us at irfanjunaid78081@gmail.com

