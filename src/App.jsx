import { useState } from 'react'
import ComponentHolder from '../Components/ComponentHolder'
import './App.css'
import Component1 from '../Components/Component1';
import Component2 from '../Components/Component2';
import '../Components/Component.css';

function App() {
  const [page,setPage]= useState('section1');
  return(
    <>
    <ComponentHolder onPageChange={setPage} page={page}/>
    {page === 'section1' && <Component1/>}
    {page === 'section2'&& <Component2/>}
    </>
  )
}

export default App
