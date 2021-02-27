export class Front{
    CompanyName: string;
    Role:string;
    Period:string;
    Projects:any[];
    Background:string;

    constructor(companyName:string,role:string,period:string,projects:any[],background:string){
        this.CompanyName=companyName;
        this.Role=role;
        this.Period=period;
        this.Projects=projects;
        this.Background=background;
    }
    

}

export class WorkExperience{
    Front : Front;

    constructor(front:Front){
        this.Front=front;
    }
}
