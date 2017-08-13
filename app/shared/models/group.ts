import { User } from './user';

export interface Group {
    name: string;
    createdDate: string;
    participants: Array<User>;
}