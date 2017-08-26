export class User {
  get authId(): string {
    return this._authId;
  }

  set authId(value: string) {
    this._authId = value;
  }
  get dateEnd(): string {
    return this._dateEnd;
  }

  set dateEnd(value: string) {
    this._dateEnd = value;
  }
  get dateCreated(): string {
    return this._dateCreated;
  }

  set dateCreated(value: string) {
    this._dateCreated = value;
  }
  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }
  get nickName(): string {
    return this._nickName;
  }

  set nickName(value: string) {
    this._nickName = value;
  }

  public id: string;
  private _name: string;
  private _nickName: string;
  private _email: string;
  private _role: string;
  private _picture: string;
  private _dateCreated: string;
  private _dateEnd: string;
  private _authId: string;

  // Getters and setters

  get role(): boolean {
    return this._role;
  }

  set role(value: boolean) {
    this._role = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  constructor(user: any) {
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
  }

}
