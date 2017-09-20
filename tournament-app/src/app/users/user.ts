interface IName  {
  first: string,
  last: string
}

export class User {
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
    this.name = user.name || null;
    this.userName = user.userName || null;
    this.nickName = user.nickname || null;
    this.email = user.email || null;
    this.roles = user.roles || null;
    this.picture = user.picture || null;
    this.active = user.active || true;
    this.dateCreated = user.dateCreated || Date.now;
    this.dateEnd = user.dateEnd || null;
    this.sub = user.sub || null;
    this.type = user.type || 'api';
    this.isAdmin = user.isAdmin || false;
  }

}
