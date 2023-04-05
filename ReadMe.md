# Online Movie Ticket Booking System Backend

# technology used

1. Node.js
2. Mongoose
3. Express.js

## Endpoints

- Signup
 ```bash
 api/v1/Signup
 ``` 
 - Login
 ```bash
 api/v1/login
 ``` 
 - logout
 ```bash
 api/v1/logout
 ``` 

- Create a Contact
 ```bash
 api/v1/Contact/create/
 ``` 
 
- Update a Contact 

```bash
 api/v1/Contact/update/:id
 ``` 

- Get All Contacts 

```bash
 api/v1/Get/Contacts
 ``` 

- Delete Contacts 

```bash
 api/v1/Contact/delete/:id
 ``` 


## Setup Instructions

- Clone the repository

```bash
  git clone https://github.com/Karan619602/ContactManagementSystem.git
```

- Change the current working directory

```bash
  cd ContactManagementSystem
```


- Install the packages

```bash
  npm i 
```

- Add .env in TicketBooking Directory and Setup Variables Connection_URL, JWT_SECRET, COOKIE_EXPIRES_TIME, JWT_EXPIRES_TIME.

- Run the project

```bash
  npm start
```