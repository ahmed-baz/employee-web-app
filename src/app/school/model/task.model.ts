export class Task {

  constructor(title: string) {
    this.title = title;
  }

  id?: number = 0;
  title?: string;
  done?: boolean = false;
  userId?: number = 0;
}
