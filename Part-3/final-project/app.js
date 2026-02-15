// Task Runner App
class TaskRunner {

    constructor(){

        this.tasks = new Map();
    }

    addTask(name, taskFunc = () => console.log("Default Task Executed")){

        this.tasks.set(name, taskFunc);

    }

    runtask(name){
        
        const task = this.tasks.get(name);

        if(task){

            console.log("Executing task: " + name);
            
            task();
        }
        else{

            console.log("Task not found: " + name);
        }
    }
}

// Creating Task runner instance
const myTaskRunner = new TaskRunner();

// Adding tasks
myTaskRunner.addTask("task1", () => console.log("Task 1 executed"));
myTaskRunner.addTask("task2", () => console.log("Task 2 executed"));
myTaskRunner.addTask("task3", () => console.log("Task 3 executed"));

// Running tasks
myTaskRunner.runtask("task1");
myTaskRunner.runtask("task2");
myTaskRunner.runtask("task3");