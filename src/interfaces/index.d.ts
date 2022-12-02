
export interface ICategory{
    id:number;
    title:string;
}


export interface IPost{
    id:number;
    title:string;
    status:"piblished" |"draft" |"rejected";
    category:{id:number};
    createdAt:string
}

export interface IUser{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    birthday:string;
    createdAt:string
    skills:string
    status:"piblished" |"draft" |"rejected";
}