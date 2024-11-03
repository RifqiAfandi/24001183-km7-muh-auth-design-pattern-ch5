# 🚗 Car Rental - REST API

This project is the **Backend** for a **Car Rental application**, built using the **MVC design pattern**. The project provides several CRUD features with authentication implementation.

## 📋 Main Features

- **Cars CRUD**             : Users can perform get all, get by id, create, update, and delete operations on cars.
- **Member Management**     : Users can log in, register, and check the current user.
- **Admin Management**      : Users can log in and check the current user.
- **Super Admin Management**: Users can log in, create admins, and check the current user.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Sequelize ORM
- **Dokumentasi API**: Postman & Swagger

## 📂 Route

### Health Check

| Method | Route                                     | Description                        |
|--------|-------------------------------------------|------------------------------------|
| GET    | `/api/v1/health-check`                    | Server health check                |
| GET    | `/api/v1`                                 | Onlost api url                     |

### Member Management

| Method | Route                                     | Description                        |
|--------|-------------------------------------------|------------------------------------|
| POST   | `/api/v1/users/login`                     | member can login and get token     |
| POST   | `/api/v1/users/register`                  | member can register account        |
| POST   | `/api/v1/users/current-user`              | check the information from token   |

### Admin Management

| Method | Route                                     | Description                        |
|--------|-------------------------------------------|------------------------------------|
| POST   | `/api/v1/users/login`                     | admin can login and get token      |
| POST   | `/api/v1/users/current-user`              | check the information from token   |

### Super Admin Management

| Method | Route                                     | Description                        |
|--------|-------------------------------------------|------------------------------------|
| POST   | `/api/v1/users/login`                     | super admin can login and get token|
| POST   | `/api/v1/users/create-admin`              | super admin can create admin       |
| POST   | `/api/v1/users/current-user`              | check the information from token   |

### Cars CRUD

| Method | Endpoint                                  | Description                        |
|--------|-------------------------------------------|------------------------------------|
| GET    | `/api/v1/cars/`                           | Get all data cars                  |
| GET    | `/api/v1/cars/:id`                        | Get cars by id                     |
| POST   | `/api/v1/cars/create`                     | Admin/Super admin can create cars  |
| PATCH  | `/api/v1/cars/update/:id`                 | Admin/Super admin can update cars  |
| DELETE | `/api/v1/cars/delete/:id`                 | Admin/Super admin can delete cars  |

### Documentation

| Method | Endpoint                                  | Description                        |
|--------|-------------------------------------------|------------------------------------|
| GET    | `/api-docs`                               | Show application documentation     |

## 📓 Note

We have created documentation for our project using Swagger. However, there are some instances of unknown errors that occur in the user-member and user-admin sections. To enhance the quality of our documentation, please refer to the following Postman link for this project:

**[https://documenter.getpostman.com/view/38718469/2sAY4xAhGu]**
