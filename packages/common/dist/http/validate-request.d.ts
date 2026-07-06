import type { Request, Response, NextFunction } from "express";
import type { ZodObject, ZodType } from "zod";
type Schema = ZodObject | ZodType;
export interface RequestValidationSchemas {
    body?: Schema;
    params?: Schema;
    query?: Schema;
}
export declare const validateRequest: (schemas: RequestValidationSchemas) => (req: Request, _res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validate-request.d.ts.map