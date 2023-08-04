 link: [To-Do List Application](https://ayhamalahmad.github.io/to-do/)



# To-Do List Application

This is a simple To-Do List application built using HTML, CSS, and JavaScript. The application allows users to add tasks, mark them as completed, and delete them. The tasks are stored in Local Storage, ensuring persistence even if the user closes or refreshes the page.

## How to Use

1. **Add a Task**: Type the task in the input field and click the "Add" button.

2. **Complete a Task**: Click on a task to mark it as completed. A completed task will have a "done" style applied to it.

3. **Delete a Task**: Click on the "Delete" button next to a task to remove it from the list.

## Code Explanation

The application's code is implemented using the following functions:

- `addTaskToArray`: This function adds a new task to the `arrayofTask`. It creates a task object with an ID, title, and completion status and then pushes it to the array. After adding the task, it updates the page and saves the updated task list to Local Storage.

- `addElemnetTopageFrom`: This function renders the tasks on the page. It clears the tasks div and then loops through the `arrayofTask` to create and append task elements with delete buttons.

- `addDataToLocalStorageFrom`: This function updates the Local Storage with the latest tasks data.

- `getDAtaFromLocalStorage`: This function retrieves the tasks data from Local Storage when the page loads and renders them on the page.

- `deleteTaskWith`: This function deletes a task from the `arrayofTask` and updates the Local Storage.

- `toggleStatusTaskWith`: This function toggles the completion status of a task between true and false and updates the Local Storage accordingly.

## Usage

To use the To-Do List application, simply open the index.html file in your web browser. You can then start adding tasks, marking them as completed, and deleting them as needed.

## Live Demo

You can access a live demo of the To-Do List application using this link: [To-Do List Application](https://ayhamalahmad.github.io/to-do/)


