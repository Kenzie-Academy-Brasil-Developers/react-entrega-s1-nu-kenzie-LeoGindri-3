import Botao from "../Button/button"
import Card from "../Card/CardTransition"

export default function Lista(){
    return(
        <section className="w-[50vw] ">
            <div className="flex justify-between items-center">
                <p className="text-lg leading-8  text-bold ">Resumo Financeiro</p>
                <div className="flex gap-5">
                    <Botao className={'h-10 w-16 bg-backgroundButton1  rounded-lg text-center text-sm text-hovercard  hover:-translate-y-1 transition delay-100 ease-in-out duration-100'} value={'Todos'}/>
                    <Botao className={'h-10 w-17 bg-placeholder  rounded-lg p-2 text-center text-sm text-hovercard    hover:-translate-y-1 transition delay-100 ease-in-out duration-100'} value={'Entradas'}/>
                    <Botao className={'h-10 w-17 bg-placeholder  rounded-lg p-2 text-center text-sm text-hovercard    hover:-translate-y-1 ease-in-out duration-75 '} value={'Despesas'}/>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-2xl font-bold">Você ainda não possui nenhum lançamento</h1>
                <div id="lançamentos" className="mt-4 flex flex-col gap-4">
                    <Card/>
                    <div className="bg-[#F8F9FA] w-full h-[84px] rounded-lg flex flex-col justify-center gap-4 items-start pl-5 ">
                        <div className="w-[80%] h-4 bg-borderColor1"></div>
                        <div className="w-[30%] h-4 bg-borderColor1"></div>
                    </div>
                    <div className="bg-[#F8F9FA] w-full h-[84px] rounded-lg flex flex-col justify-center gap-4 items-start pl-5 ">
                        <div className="w-[80%] h-4 bg-borderColor1"></div>
                        <div className="w-[30%] h-4 bg-borderColor1"></div>
                    </div>
                    <div className="bg-[#F8F9FA] w-full h-[84px] rounded-lg flex flex-col justify-center gap-4 items-start pl-5 ">
                        <div className="w-[80%] h-4 bg-borderColor1"></div>
                        <div className="w-[30%] h-4 bg-borderColor1"></div>
                    </div>
                    <div className="bg-[#F8F9FA] w-full h-[84px] rounded-lg flex flex-col justify-center gap-4 items-start pl-5 ">
                        <div className="w-[80%] h-4 bg-borderColor1"></div>
                        <div className="w-[30%] h-4 bg-borderColor1"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}