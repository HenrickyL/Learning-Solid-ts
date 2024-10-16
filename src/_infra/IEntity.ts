import { v4 as uuid } from "uuid";


export abstract class IEntity {
    public readonly id: string ;
  
    constructor(id?: string) {
      this.id = id ?? uuid();
    }
  }
  