export interface ResponseType<T = any> {
    status: number;
    success: true,
    message: "string",
    data?: T
}
