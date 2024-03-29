# **ToDo App**

## **Overview**

This repository contains a simple To-Do List application built with HTML, CSS, and JavaScript, along with a Dockerfile to containerize the application. The application allows users to add, mark as completed, and delete tasks.

## **Running the Application Locally**

To run the application locally, follow these steps:

1. Clone the Repository: Clone this repository to your local machine.
2. Navigate to the Project Directory: Change your current directory to the project directory.
3. Access the Application: Open a web browser and navigate to http://localhost to access the To-Do List application


## **Assumptions and Decisions**

**Base Image**: The Dockerfile uses the httpd:2.4 image as the base, which is a lightweight Apache HTTP Server image. This choice was made for its simplicity and compatibility with web applications.

**Working Directory:** The working directory is set to /usr/local/apache2/htdocs/ to align with the default document root of the Apache server.
