class TaskManager {
  constructor(name) {
    this.name = name;

    //  Private state using closure
    let tasks = [];

    this.addTask = function (taskName, delay) {
      tasks.push({ taskName, delay });
      console.log(`[ADD] Task "${taskName}" added with ${delay}ms delay`);
    };

    this.runTasks = function () {
      console.log(`\n[START] Task Manager: ${this.name}\n`);

      tasks.forEach((task, index) => {
        this.executeTask
          .bind(this)(task, index); //  context binding
      });
    };
  }

  executeTask(task, index) {
    console.log(
      `[QUEUE] Task ${index + 1}: "${task.taskName}" queued`
    );

    setTimeout(() => {
      console.log(
        `[EXECUTE] Task ${index + 1}: "${task.taskName}" executed after ${task.delay}ms`
      );
    }, task.delay);
  }
}

const manager = new TaskManager("Async Manager");

manager.addTask("Fetch Users", 1000);
manager.addTask("Process Payments", 500);
manager.addTask("Send Emails", 1500);

manager.runTasks();