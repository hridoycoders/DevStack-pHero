# Dev Stack

Dev Stack is a website where developers can explore different technologies and select the tools they want to use in their development stack.

## Features

- Users can explore technologies with their name, category, rating, and difficulty.
- Users can add technologies to their own stack.
- Users can remove one technology or remove all selected technologies.
- Duplicate technologies cannot be added to the stack.
- Toast notifications are shown for different actions.
- The website is responsive and works on different screen sizes.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript or TypeScript. It helps us create the user interface easily in React.

### 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component. State is used to store data inside a component and update it when needed.

### 3. What does the useState hook do, and where did you use it in this project?

The useState hook helps us store and change data in a component. I used it to manage the technologies selected by the user in the stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to run a task after a component renders, such as fetching data. In this project, I used React's use() and Suspense to load the JSON data.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it to show a message when the stack is empty.

Example:

{stack.length === 0 && (
  <p>No technologies added yet.</p>
)}

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component sends data to a child using props. The child can send information back by calling a function passed by the parent.
