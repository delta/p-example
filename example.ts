import config from 'config';

import GeneralController from "./controllers/general.controller";

const controllerClasses = [
    GeneralController
]

export default () => {
    // Access config by 
    return {
        controllerClasses,
    }
}