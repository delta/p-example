import config from 'config';

import GeneralController from "./controllers/general.controller";

import ExampleMiddleware from "./middleware/example.middleware";
import GlobalMiddleware from "./middleware/example.globalmiddleware";

import { formProps } from "./forms/example-form";

import ExampleRoutes from "./middleware/example.routes";

const controllerClasses = [
    GeneralController
]

const middleware = [
    {
        'path': '/',
        'middleware': ExampleMiddleware,
        'global': false
    },
    {
        'path': '/',
        'middleware': GlobalMiddleware,
        'global': true
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