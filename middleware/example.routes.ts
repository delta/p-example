import { Request, Response, NextFunction } from "express";

export default ({ displayName, pagePrefix, path }) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const routes = {
			displayName,
			pagePrefix,
			path,
			section: 'Institute',
			routes: [
				{
					name: "Home",
					page: "/", // The page name in pages folder
					href: "/" // The route
				},
				{
					name: "About",
					page: "/about",
					href: "/about"
				},
				{
					name: "Dynamic",
					page: "/dynamic",
					href: "/dynamic"
				}
			]
		}

		// @ts-ignore
		req.routes.push(routes);
		next();
	}
}