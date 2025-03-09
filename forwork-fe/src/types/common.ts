export interface ResponseType<T = any> {
    status: number;
    success: true,
    message: "string",
    data?: T
}

export interface CommonDataType<T = any> {
    totalElements: number;
    totalPages: number;
    page: number;
    size: number;
    content: T
}
