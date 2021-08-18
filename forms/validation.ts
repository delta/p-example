import Ajv from "ajv"
import {formSchema} from "./example-form";
export const ajv = new Ajv();

// add the schema for all forms here
ajv.addSchema(formSchema, "exampleForm");