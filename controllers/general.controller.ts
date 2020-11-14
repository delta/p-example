import { Router, Request, Response, NextFunction } from "express";
import NextApplication from "next/dist/next-server/server/next-server";

import logger from "utils/helpers/logger";

class GeneralController {
    public path = ""; // Base Url of this controller
    public apiRouter = Router(); // Put API Routes into this router
    public userRouter = Router(); // Put User Routes into this router
    public adminRouter = Router(); // Put Admin Routes into this router
    private pagePrefix: string; // Base prefix of where to look for plugin pages (/plugins/plugin-name/)
    private nextApp: NextApplication; // Root next app, passed to constructor

    private readonly logger = logger.getNamedLogger("Plugin [Example] / Controller [General]");

    constructor({ pagePrefix, nextApp }) {
        this.pagePrefix = pagePrefix;
        this.nextApp = nextApp;

        this.initialiseRoutes();
    }

    private initialiseRoutes() {
        this.apiRouter.get(`/status`, this.getStatus);
        this.userRouter.get(``, this.renderIndex);
        this.userRouter.get(`/about`, this.renderAbout);
        this.userRouter.get('/dynamic/:foo', this.renderDynamic);
    }

    private getStatus = (req: Request, res: Response, next: NextFunction) => {
        // try{
        //   throw new Error("XD");
        // } catch(err){
        //   return next(new HttpException({status: 500, message:`Internal Server error!`, logger: this.logger, err})); // Example for exceptions
        // }
        return res
            .status(200)
            .jsonp({ status: 200, success: true, message: "Api is running !" });
    };

    private renderIndex = (req: Request, res: Response, next: NextFunction) => {
        return this.nextApp.render(req, res, `${this.pagePrefix}${this.path}`, req.params);
    }

    private renderAbout = (req: Request, res: Response, next: NextFunction) => {
        return this.nextApp.render(req, res, `${this.pagePrefix}${this.path}/about`, req.params);
    }

    private renderDynamic = (req: Request, res: Response, next: NextFunction) => {
        return this.nextApp.render(req, res, `${this.pagePrefix}${this.path}/dynamic`, req.params);
    }
}

export default GeneralController;
