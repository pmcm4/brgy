# Barangay Request Management System

## Overview
The Barangay Request Management System is a web application developed using the PERN stack (PostgreSQL, Express.js, React, Node.js). This system allows residents of Barangay San Roque, Marikina City, to request barangay certificates and IDs seamlessly.

## Features
- **User Registration and Authentication:** Secure user registration and login functionality.
- **Certificate Requests:** Residents can request various barangay certificates online.
- **ID Requests:** Residents can apply for barangay IDs through the system.
- **Request Tracking:** Users can track the status of their requests.
- **Admin Dashboard:** An admin panel for managing requests and user data.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Deployment:** GCP VM Instance for Backend and Database and Vercel for Frontend. 

## Installation and Setup
To run this project locally, follow these steps:

### Prerequisites
- Node.js
- PostgreSQL

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/pmcm4/brgy.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd brgy
    ```
3. **Install the dependencies:**
    ```bash
    npm install
    ```
4. **Set up the PostgreSQL database:**
    - Create a new PostgreSQL database.
    - Configure your database connection settings in a `.env` file. Use the provided `.env.example` as a template.
    ```plaintext
    DB_HOST=your_db_host
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    ```
5. **Start the development server:**
    ```bash
    npm run dev
    ```


