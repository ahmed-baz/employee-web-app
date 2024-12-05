import {Component} from '@angular/core';
import {Task} from '../../model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  pendingTasksLimit: number = 5;
  name: string = "Ahmed Baz";
  date: Date = new Date();
  tasks: Task[] = []

  getPendingTasksCount(): number {
    return this.tasks.filter(task => !task.done).length
  }

  isPendingTasksLimitExceeded(): boolean {
    return this.getPendingTasksCount() > this.pendingTasksLimit;
  }

  addTask(title: string): void {
    let task: Task = new Task(title);
    this.tasks.push(task);
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

}
