// js/controller.js
export class TaskController {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(text) {
    this.tasks.push({ text, completed: false });
    this.saveTasks();
  }

  toggleTask(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
