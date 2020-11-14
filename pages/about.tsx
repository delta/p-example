import Link from "next/link";
import Form from '../../../utils/FormBuilder/Form';

const testData = [
    {
        id: 1,
        question:"Question 1",
        type:"checkbox",
        options:["option 1","option 2","option 3","option 4"]
    },
    {
        id: 2,
        question:"Question 2",
        type:"checkbox",
        options:["option a","option b","option c"]
    },
    {
        id:3,
        question:"what is your name ?",
        type:"text"
    }
]

function About() {
    return <>
        <h1>About</h1>
        <Link href={"/plugins/p-example"} as={"/example"}>About</Link>
        <Link href={"/plugins/p-example/dynamic?foo=about"} as={"/example/dynamic/about"}>Dynamic (About)</Link>
        
        <h2 style={{margin:"0 auto",textAlign:"center"}}>Demo form builder</h2>
        <Form data={testData}/>

    </>
}

Object.assign(About, { layout: "dashboard-layout" });

export default About