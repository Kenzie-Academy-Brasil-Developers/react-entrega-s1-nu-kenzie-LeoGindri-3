import imgLixeira from '../../assets/img/trash.png'


export default function Card(){
    return(

        <section className='px-5 py-3 h-19 flex flex-col gap-4 bg-[#F8F9FA] '>
            <div className='flex justify-between  '>
                <h2 className='font-extrabold text-font1'>{}Salário: Mês Dezembro</h2>
                <div className='h-full my-auto flex gap-7'>
                    <span className='m-auto text-xs font-normal text-[#212529]'>{}R$ 6.660,00</span>
                    <button className='bg-placeholder h-6 w-6 rounded-md hover:transition delay-150 duration-300 ease-in-out'> <img className='m-auto object-none' src={imgLixeira} alt="" /></button>
                </div>
            </div>
            <span className='text-base text-backgroundcolor font-bold'>{}Entrada</span>
        </section>

    )
}