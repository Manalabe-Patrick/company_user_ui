export interface User{
    id:string,
    firstName:string,
    lastName:string,
    email:string,
    dateRegistered:Date,
    dateAccessed:Date,
    hasCor:boolean,
    Code: string,
    identityProvider: string,
    status: boolean
}