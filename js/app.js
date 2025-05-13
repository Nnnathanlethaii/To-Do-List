// js/app.js
import { TaskController } from './controller.js';

class App {
  constructor() {
    this.controller = new TaskController();
    this.taskInput = document.getElementById("taskInput");
    this.addTaskBtn = document.getElementById("addTaskBtn");
    this.taskList = document.getElementById("taskList");

    this.addTaskBtn.addEventListener("click", () => this.addTask());
    window.addEventListener("load", () => this.renderTasks());
  }

  addTask() {
    const text = this.taskInput.value.trim();
    if (!text) return;
    this.controller.addTask(text);
    this.taskInput.value = "";
    this.renderTasks();
  }

  toggleTask(index) {
    this.controller.toggleTask(index);
    this.renderTasks();
  }

  deleteTask(index) {
    this.controller.deleteTask(index);
    this.renderTasks();
  }

  renderTasks() {
    this.taskList.innerHTML = "";
    const tasks = this.controller.getTasks();

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}" style="cursor:pointer;" onclick="app.toggleTask(${index})">
          ${task.text}
        </span>
        <button onclick="app.deleteTask(${index})">❌</button>
      `;
      this.taskList.appendChild(li);
    });
  }
}

// Make `app` accessible globally for HTML inline events
window.app = new App();
