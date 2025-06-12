# Live Link: https://schedule-processing-next-js.vercel.app/
# Admin Email: admin@gmail.com
# Admin Password: 123456
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Schedule Processing Application

## Introduction

Welcome to the **Schedule Processing Application**! This project is built with modern technologies such as **Next.js**, **MongoDB**, **Tailwind CSS**, **Express**, and **JWT** to provide an intuitive and secure platform for managing tasks, events, and team member activities. The application is designed to allow administrators and employees to collaborate effectively, manage tasks, add and manage events, and maintain a secure and organized workflow. It also features an AI-powered chatbot to assist users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Features

- **Admin Dashboard**: Manage tasks, events, and view team progress in an intuitive interface.
- **Employee Panel**: View assigned tasks and events, track progress, and update task statuses.
- **Task Management**: Add, edit, and manage tasks for team members.
- **Event Management**: Add events using an integrated calendar and manage event details.
- **Profile Page**: Personalized profile for each user to update their information.
- **Print Page for Admin**: Print the details of the Admin dashboard.
- **Contact Us Page**: A page for users to contact the admin or support.
- **AI Chatbot**: An intelligent assistant to help users with common queries.
- **Protected Routes**: Middleware-based token authentication to ensure secure access.
- **Password Reset**: Functionality for users to reset their passwords.
- **OAuth Authentication**: Google and GitHub login integrations.
- **Responsive and Beautiful UI**: A modern and visually appealing interface, powered by **Tailwind CSS**.

## Technologies Used

- **Next.js**: A powerful React framework for building server-side rendered (SSR) applications.
- **MongoDB**: NoSQL database used to store user data, tasks, events, and more.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs without writing custom CSS.
- **Express**: Node.js web application framework for handling the back-end logic.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization, ensuring protected routes.
- **Google and GitHub OAuth**: For authentication via Google and GitHub accounts.

## Installation

To set up the **Schedule Processing Application** locally, follow these steps:

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/schedule-processing-application.git
    cd schedule-processing-application
    ```

2. **Install Dependencies**:
    Install the required packages using npm or yarn:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set Up Environment Variables**:
    Create a `.env.local` file in the root directory of the project and add the necessary variables, such as your MongoDB URI, JWT secret, and OAuth credentials:
    ```env
    DB_USER= ?
    DB_PASS= ?
    NEXTAUTH_SECRET= ?
    NEXTAUTH_URL= ?
    GOOGLE_CLIENT_ID = ?
    GOOGLE_CLIENT_SECRET = ?
    EMAIL_USER = ?
    EMAIL_PASS = ?
    JWT_SECRET = ?
   GITHUB_ID = ?
   GITHUB_SECRET= ?
   OPENROUTER_API_KEY= ?




    ```

4. **Run the Application**:
    After setting up your environment variables, you can start the application by running:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will now be accessible at `http://localhost:3000`.

## Usage

Once the application is running, you can:

1. **Log In**: Use your Google or GitHub account to log in to the system.
2. **Admin Panel**: As an admin, you can manage tasks, events, and user profiles. You can also view team progress and print reports.
3. **Employee Panel**: Employees can view their assigned tasks, track progress, and update task status. It also shows upcoming events that they are part of.
4. **AI Chatbot**: Use the integrated chatbot to ask common questions and get immediate assistance.

## Configuration

You can customize the application further by modifying the following:

- **MongoDB Configuration**: Change your database connection in the `.env.local` file.
- **JWT Secret**: Update your JWT secret key for token-based security in `.env.local`.


## Examples

### Admin Dashboard
The Admin dashboard provides a comprehensive view of all tasks, team members, and events. You can add new tasks, edit existing ones, and assign them to employees. You can also manage events via the event calendar and ensure smooth operations.

### Employee Panel
The Employee panel allows employees to view tasks assigned to them, track their progress, and update task status. It also shows upcoming events that they are part of.

### AI Chatbot
The AI Chatbot can assist users by answering frequently asked questions, providing tips, or guiding users through common processes in the app.



## Contributors

We would like to thank all the contributors for their hard work on this project. If you'd like to contribute, please open an issue or submit a pull request.

- [Bibek Bhowmick](https://github.com/bibekbowmick2-2)
- [Babla Dey](https://github.com/babladey275)
- [Tazwoar](https://github.com/TazwoarCommits)
- [Uzzal](https://github.com/mohammaduzzal)



---

Enjoy using the **Schedule Processing Application**! If you have any questions or issues, feel free to reach out via the Contact Us page or open an issue on GitHub.

