export declare class HttpError extends Error {
    readonly statusCode: number;
    readonly details?: Record<string, string> | undefined;
    constructor(statusCode: number, message: string, details?: Record<string, string> | undefined);
}
//# sourceMappingURL=http-error.d.ts.map