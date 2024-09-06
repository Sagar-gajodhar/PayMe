
import { BrowserRouter , Routes , Route} from "react-router-dom"

import SignUp from './pages/Signup'
import SignIn from './pages/signin'
import Dashboard from "./pages/dashboard"
import Send from "./pages/send"
import LastPage from "./pages/lastPage"
import Landing from "./pages/landing"
function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/send" element={<Send/>}/>
        <Route path="/lastpage" element={<LastPage/>}/>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
