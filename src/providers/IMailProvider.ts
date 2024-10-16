interface IAddress{
    name: string
    email: string
}
export interface IMessage{
    to: IAddress
    from: IAddress
    body: string
    subject: string
}

export interface IMailProvider {
    sendMailAsync: (message: IMessage) => Promise<void>
}