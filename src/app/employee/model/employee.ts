export class Employee {


  constructor(id: number, firstName: string, lastName: string, email: string, salary: number, joinDate: Date) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._salary = salary;
    this._joinDate = joinDate;
  }

  private _id?: number;
  private _firstName?: string;
  private _lastName?: string;
  private _email?: string;
  private _salary?: number;
  private _joinDate?: Date;


  get id(): number | undefined {
    return this._id;
  }

  get firstName(): string | undefined {
    return this._firstName;
  }

  get lastName(): string | undefined {
    return this._lastName;
  }

  get email(): string | undefined {
    return this._email;
  }

  get salary(): number | undefined {
    return this._salary;
  }

  get joinDate(): Date | undefined {
    return this._joinDate;
  }
}
