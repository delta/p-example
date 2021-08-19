import config from 'config';

import GeneralController from "./controllers/general.controller";

import ExampleMiddleware from "./middleware/example.middleware";

import { formProps } from "./forms/example-form";

import ExampleRoutes from "./middleware/example.routes";

const controllerClasses = [
    GeneralController
]

const middleware = [
    {
        'path': '/',
        'middleware': ExampleMiddleware
    }
]

const routes = ExampleRoutes

const forms = [
    {
        'name': 'exampleForm',
        'formProps': formProps
    }
]

export default () => {
    // Access config by 
    return {
        controllerClasses,
        middleware,
        routes,
        forms
    }
}