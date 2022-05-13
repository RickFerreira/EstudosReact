import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import NewWork from './components/pages/NewWork'
import Contact from './components/pages/Contact'
import Tarefas from './components/pages/Tarefas'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="tarefas/*" element={<Tarefas />} />
          <Route exact path="contact/*" element={<Contact />} />
          <Route exact path="newwork/*" element={<NewWork />} />
        </Routes>
      </Container>
      <Footer />
    </Router> 
  )
}
export default App
