import React from 'react'
import CardList from './components/CardList'
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header/>
      <div className='container mx-auto p-4'>
        <CardList />
      </div>
    </>
  )
}

export default App