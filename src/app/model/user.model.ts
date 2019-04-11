export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  salary: number;
  age: number;
  constructor(id: number, firstName: string) {
    this.id = id;
    this.firstName = firstName;
  }
}

export class UserAdd {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  salary: number;
  age: number;
}
