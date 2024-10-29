import Link from "next/link";

export default function MenuItem(props: any){
    return (
        <Link href={props.link} className="hover:bg-blue-500 rounded-md py-4 px-2">{props.texto}</Link>
    );
}