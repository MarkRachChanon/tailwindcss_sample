import React from 'react'
import CardList from './components/CardList'
import Header from './components/Header'
import 'bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
  return (
    <>
      <Header/>
      <section className='h-screen bg-cover bg-center flex items-center justify-between text-white' style={{ backgroundImage: 'url(https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='container mx-auto p-4'>
          <h2 className='text-5xl font-bold mb-4 text-blue-950'>Welcome to the Card Gallery</h2>
          <p className='text-black mb-6 text-lg font-semibold'>Browse through our collection of cards and discover amazing designs.</p>
          {/* <Button nameButton="Explore Cards" /> */}
        </div>
      </section>
      <div className='container mx-auto p-4'>
        <CardList />
      </div>
    </>
  )
}

export default App