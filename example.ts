import config from 'config';

import GeneralController from "./controllers/general.controller";

import ExampleMiddleware from "./middleware/example.middleware";

import ExampleRoutes from "./middleware/example.routes";

const controllerClasses = [
    GeneralController
]

const middleware = [
    ExampleMiddleware
]

const routes = ExampleRoutes

export default () => {
    // Access config by 
    return {
        controllerClasses,
        middleware,
        routes
    }
}