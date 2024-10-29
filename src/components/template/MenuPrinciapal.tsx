import MenuItem from "./MenuItem";

export default function MenuPrincipal(){

    return (
        <aside className="w-80  bg-zinc-900 ">
            <nav className=" flex flex-col p-5 gap-1">
                <MenuItem texto="Home" link="/"/>
                <MenuItem texto="Página" link="/pagina"/>
            </nav>
        </aside>

    );
}