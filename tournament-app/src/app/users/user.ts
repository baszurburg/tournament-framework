const enum Roles {
  default,
  owner,
  manager,
  referee
}

interface IName  {
  first: string,
  last: string
}

export class User {
  id: string;
  userName: string;
  name: IName;
  nickName: string;
  email: string;
  roles: string[];
  picture: string;
  active: boolean;
  dateCreated: string;
  dateEnd: string;
  sub: string;
  type: string;
  isAdmin: boolean;

  // Getters and setters

  constructor(user: any) {
    this.name = user.name;
    this.email = user.email;
    this.roles = user.role;
  }

}
