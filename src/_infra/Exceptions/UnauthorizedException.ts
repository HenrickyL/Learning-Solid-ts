import { ErrorException } from "./ErrorException"

export class UnauthorizedException extends ErrorException<any> {
    constructor(param: string) {
      super(param || `Unauthorized Exception.`)
      this.name = 'UnauthorizedException'
      this._code = 401
    }
  }