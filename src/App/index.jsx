
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Inicio } from '@/Page/Inicio'

function App () {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Inicio />} />
            <Route path='*' element={<p>Not Found</p>} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
