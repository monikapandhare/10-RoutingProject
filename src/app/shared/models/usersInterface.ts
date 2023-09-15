




export interface Iusers {
    userName: string;
    userId: string;
    userEmail : string;
    userRole :Irole;
}

export type Irole = "admin" | "users"