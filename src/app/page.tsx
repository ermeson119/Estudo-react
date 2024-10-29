import Caixa from "@/components/Caixa";

export default function Home() {
  return (
    <div>
      <h1>Masterclass Next</h1>

      <div className="h-screen flex justify-center items-center bg-zinc-700 gap-5">
        <Caixa texto="CAIXA 1" className="w-24"/>
        <Caixa texto="CAIXA 2" className="flex-grow"/>
        <Caixa texto="CAIXA 3" className="w-32"/>
      </div>
    </div>
  );
}
