import { toast, ToastContainer } from 'react-toastify'
import './App.css'

function App() {
  

  return (
    <>
      <p onClick={()=> toast.success("Hello!!")} className='btn btn-primary'>Project Setup !!!</p>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
