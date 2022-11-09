export class People{
    Id:string;
    UserName: string;
    Description: string;
    Email:string;
 

    constructor(Id: string,UserName: string, Description: string,Email: string){
        this.Id = Id;
        this.UserName=UserName;
        this.Description=Description;
        this.Email=Email;

    }
}