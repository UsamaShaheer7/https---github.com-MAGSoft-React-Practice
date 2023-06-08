# React Practice Repository

## Objective    
This assignment focuses on practicing Optional Chaining within a React application. It will help you gain hands-on experience in safely accessing nested properties and handling potential undefined or null values.

## Task Description
In this task, you will practice using Optional Chaining in React to safely access nested properties of an object. You will create an object with nested properties and use optional chaining to access and display them. This will help you understand how optional chaining can prevent errors when accessing properties that may be undefined or null.

### Task Details
- Fork this repository to create a copy under your GitHub account.
- Clone the forked repository to your local machine.
- Create a new branch named optional-chaining-react.
- Inside the cloned repository, navigate to the root folder of the project.
- Inside the src folder, create a `optional-chaining-task` folder and `components` folder inside `optional-chaining-task` folder.
- Inside the components folder, create a new component file called NestedProperties.js.
- Open the `NestedProperties.js` file.
- Create a functional component called NestedProperties.
- Inside the **NestedProperties** component, create an object called person with nested properties. For example:

```bash

const person = {
  name: {
    first: 'John',
    last: 'Doe',
  },
  age: 30,
};

```
- Import and render the NestedProperties component within the App component.
- Test your React application to ensure that the value of person.name.first is correctly accessed and displayed.
- Commit and push your changes to the optional-chaining-react branch.
- Create a pull request from the optional-chaining-react branch to the main branch of the original repository.


## Getting Started
To get started with the task, follow the instructions below:

### Folder Structure:
For this task, please structure your project files as follows:

 ``` 
 - src/
  - assets/      # Images, fonts and other static files
  - components/  # Shared React components
  - contexts/    # React Context definitions
  - hooks/       # Custom React hooks
  - layouts/     # Layout components used by multiple pages
  - pages/       # Components representing unique pages/screens in your app
  - services/    # Services for handling API requests, data processing etc.
  - styles/      # Global CSS or other style files
  - utils/       # Utility functions and constants
  - App.js       # Main application component
  - index.js     # Entry point of your application

 ```


 
### Install the dependencies using npm:

 ```
npm install
 ```

Open your browser and visit http://localhost:3000 to see the application in action.

## Submission:

Submit your task by creating a pull request from your optional-chaining-react branch to the main branch of the original repository.

**Note**: Make sure to include the changes made to the NestedProperties.js and App.js files, and any relevant updates to other components in your pull request.
Feel free to enhance the assignment further by adding additional components, styles, or functionalities as you see fit. Good luck with your assignment!



