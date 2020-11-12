import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
    const routes = [
		{
			name: "Home",
			href: "/"
		},
		{
			name: "About",
			href: "/about"
		},
		{
			name: "Dynamic",
			href: "/dynamic"
		}
	];
	// @ts-ignore
	req.routes.push.apply(req.routes, routes);
    next();
}