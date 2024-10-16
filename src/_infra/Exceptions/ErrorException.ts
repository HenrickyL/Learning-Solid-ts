export abstract class ErrorException<T> extends Error {
    protected _code : number
    protected _data? : T
  
    constructor(param?: string, data?: T) {
      super(param || `Internal Server Error.`)
      this.name = 'Internal Server Error'
      this._code = 500
      this._data = data
    }
    get statusCode():number{
      return this._code
    }
    get type():string{
      return this.name
    }
    get data():T {
      return this._data
    }
  }