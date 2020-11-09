import config from 'config';

import GeneralController from "./controllers/general.controller";

import ExampleMiddleware from "./middleware/example.middleware";

const controllerClasses = [
    GeneralController
]

const middleware = [
    ExampleMiddleware
]

export default () => {
    // Access config by 
    return {
        controllerClasses,
        middleware
    }
}