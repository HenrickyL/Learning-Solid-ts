import { HttpResponse } from "./HttpResponses";

export interface IController<Req,Res>{
    handleAsync: (request: Req) => Promise<HttpResponse<Res>>
    formatData?:(request: Req)=> Req;
  }