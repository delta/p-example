import Link from "next/link";

function About() {
    return <>
        <h1>About</h1>
        <Link href={"/plugins/p-example"} as={"/example"}>About</Link>
        <Link href={"/plugins/p-example/dynamic?foo=about"} as={"/example/dynamic/about"}>Dynamic (About)</Link>
    </>
}

export default About;