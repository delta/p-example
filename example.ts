import config from 'config';

import GeneralController from "./controllers/general.controller";

import ExampleMiddleware from "./middleware/example.middleware";

import FormValidationMiddleware from "./middleware/formvalidation.middleware";

import ExampleRoutes from "./middleware/example.routes";

const controllerClasses = [
    GeneralController
]

const middleware = [
    {
        'path': '/',
        'middleware': ExampleMiddleware
    },
    {
        'path': '/form/submit',
        'middleware': FormValidationMiddleware
    }
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