import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home'
import About from './pages/About'
import SignIn  from './pages/SignIn'
import SignUp  from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects  from './pages/Projects'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App