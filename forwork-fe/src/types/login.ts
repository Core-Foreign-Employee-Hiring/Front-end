export interface LoginDataType {
    accessToken: string;
    refreshToken: string;
    role: RoleType;
    name: string;
    userId: string;
}

export type RoleType = "EMPLOYEE" | "EMPLOYER" | "EMPLOYEE_PREMIUM" | "EMPLOYER_PREMIUM" | "ADMIN"
