
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Inicio } from '@/Page/Inicio'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Inicio />} />
            <Route path='*' element={<p>Not Found</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
