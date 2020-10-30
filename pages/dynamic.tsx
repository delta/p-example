import { GetServerSideProps } from "next";

import Link from "next/link";

function Dynamic({ foo }) {
    return <>
        <h1>Dynamic Foo = { foo }</h1>
        <Link href={"/plugins/p-example"} as={"/example"}>Home</Link>
        <Link href={"/plugins/p-example/about"} as={"/example/about"}>About</Link>
    </>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const foo = query.foo;

    return {
        props: {
            foo,
        }
    }
}

export default Dynamic;