import { ZodError } from "zod";
const formatedError = (error) => error.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message
}));
export const validateRequest = (schemas) => {
    return (req, _res, next) => {
        try {
            if (schemas.body) {
                req.body = schemas.body.parse(req.body);
            }
            if (schemas.params) {
                req.params = schemas.params.parse(req.params);
            }
            if (schemas.query) {
                req.query = schemas.query.parse(req.query);
            }
            next();
        }
        catch (error) {
            if (error instanceof ZodError) {
                const validationErrors = error.issues.map((issue) => ({
                    path: issue.path.join("."),
                    message: issue.message,
                }));
                console.log(validationErrors);
            }
            next(error);
        }
    };
};
//# sourceMappingURL=validate-request.js.map