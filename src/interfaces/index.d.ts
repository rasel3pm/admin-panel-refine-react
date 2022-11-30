
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