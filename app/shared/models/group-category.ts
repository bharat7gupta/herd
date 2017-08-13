export class GroupCategory {
    id: string;
    name: string;
    description: string;
    createdDate: string;

    validate(): string {
        if(this.name==null || this.name.length===0)
            return "Invalid Category Name";

        return "";
    }
}