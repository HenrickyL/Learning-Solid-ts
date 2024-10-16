import { ErrorException } from "./ErrorException"

export class BadRequestException extends ErrorException<any> {
    constructor(param: string) {
      super(param || `Bad Request Exception.`)
      this.name = 'Bad Request Exception'
      this._code = 400
    }
  }