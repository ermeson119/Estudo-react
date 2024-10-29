import Caixa from "@/components/Caixa";
import Cabecalho from "@/components/template/Cabecalho";
import MenuPrincipal from "@/components/template/MenuPrinciapal";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Cabecalho />
      

      <div className="flex-grow flex">
        <MenuPrincipal />
        <main>
          <Caixa />
        </main>
      </div>
    </div>
  );
}
