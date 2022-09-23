// import { useState } from 'react'
import HeaderNav from './Components/Header/header'
import FormNewValue from './Components/Form/form'
import Lista from './Components/List/ListTransictions'

function App() {

  return (
    <div className="App h-screen  max-w-full ">
        {/* <div className='w-full h-full flex items-center justify-center'>
          <div className='w-full h-full bg-inputbackground 2xl flex gap-5 items-center justify-center'>
            <LeftCard/>
            <RightCard/>
          </div>
        </div> */}
        <main>
            <HeaderNav/>
          <article className='max-w-[70vw] h-full m-auto mt-10 flex gap-16'>
            <FormNewValue/>
            <Lista/>
          </article>
        </main>    
    </div>
  )
}

export default App
