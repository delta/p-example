import {formSchema, initialFormData, uiSchema} from "../forms/example-form";
import FormBuilder from "utils/FormBuilder/FormBuilder";

function FormPage() {
    return <>
        <h1>Form</h1>
        <FormBuilder
            formSchema={formSchema}
            uiSchema={uiSchema}
            submitUrl={'form/submit'}
            initialFormData={initialFormData}
        />
    </>
}

Object.assign(FormPage, { layout: "dashboard-layout" });

export default FormPage;
