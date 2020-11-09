import Link from "next/link";

function Home() {
    return <>
        <h1>Hello World</h1>
        <Link href={"/plugins/p-example/about"} as={"/example/about"}>About</Link>
        <Link href={"/plugins/p-example/dynamic?foo=home"} as={"/example/dynamic/home"}>Dynamic (Home)</Link>
    </>
}

export default Object.assign(Home, { layout: "main-content-layout" });
