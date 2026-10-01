import { addTask, findTask, Task } from "./tasks";

let tasks: Task[] = [];

tasks = addTask(tasks, "Read Chapter 1");

const task = findTask(tasks, 1);

if (task) {
  console.log(task.title);
} else {
  console.log("Task not found");
}

const missingTask = findTask(tasks, 99);

if (missingTask) {
  console.log(missingTask.title);
} else {
  console.log("Task with ID 99 was not found.");
}