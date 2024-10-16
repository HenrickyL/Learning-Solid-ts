import { uuid } from "uuidv4";


export abstract class IEntity {
    public readonly id: string ;
  
    constructor(id?: string) {
      this.id = id ?? uuid();
    }
  }
  