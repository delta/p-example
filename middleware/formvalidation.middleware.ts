import { Request, Response, NextFunction } from "express";
import {ajv} from "../forms/validation";

export default (req: Request, res: Response, next: NextFunction) => {
    const validate = ajv.getSchema("exampleForm")
    if (!validate(req.body)) {
        return res
            .status(400)
            .jsonp({ status: 400, success: false, message: "Validation failed :("});
    }
    next();
}