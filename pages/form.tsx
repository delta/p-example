import {formProps} from "../forms/example-form";
import FormBuilder from "utils/FormBuilder/FormBuilder";

function FormPage() {
    return <>
        <h1>Form</h1>
        <FormBuilder {...formProps} />
    </>
}

Object.assign(FormPage, { layout: "dashboard-layout" });

export default FormPage;
