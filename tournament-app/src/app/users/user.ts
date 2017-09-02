const enum Roles {
  default,
  owner,
  manager,
  referee
}

export class User {
  id: string;
  name: string;
  nickName: string;
  email: string;
  roles: string[];
  picture: string;
  dateCreated: string;
  dateEnd: string;
  authId: string;

  // Getters and setters

  constructor(user: any) {
    this.name = user.name;
    this.email = user.email;
    this.roles = user.role;
  }

}
