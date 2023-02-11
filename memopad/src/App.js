import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Create from './components/Create';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MemoContainer from './components/MemoContainer';
import UpdateModel from './components/UpdateModel';
import Greet from './components/Greet';

function App() {
  const [alert, setAlert] = useState({})
  const [showAlert, setShowAlert] = useState(false)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [showUpdateModel, setShowUpdateModel] = useState(false)
  const [updateId, setUpdateId] = useState()

  const [utitle, setuTitle] = useState("");
  const [udescription, setuDescription] = useState("");

  const [selectedColor, setSelectedColor] = useState("")

  const [greet, setGreet] = useState({})
  const [showGreet, setShowGreet] = useState(false)

  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("memowritememos")) || []
  );
  useEffect(() => {
    localStorage.setItem("memowritememos", JSON.stringify(memos));
  }, [memos]);

  useEffect(() => {
    const time = new Date().getHours()
    if (time >= 0 && time < 12) {
      setGreet({
        time: "morning",
        msg: "Hi good morning! Have a nice day 😇"
      })
    }
    if (time >= 12 && time < 17) {
      setGreet({
        time: "afternoon",
        msg: "Hi good afternoon! Hope you are having a great day 😇"
      })
    }
    if (time >= 17 && time < 21) {
      setGreet({
        time: "evening",
        msg: "Hi good evening! Have a relaxing evening 😇"
      })
    }
    if (time >= 21) {
      setGreet({
        time: "night",
        msg: "Hi good night! Have a pleasant sleep 😴"
      })
    }
    setShowGreet(true)
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={
            <>
              <Hero />
              <div className="body_container">
                <About />
                <Features />
              </div>
            </>
          }></Route>
          <Route exact path='/create-new' element={<>
            <Create memos={memos} setMemos={setMemos} title={title} setTitle={setTitle} description={description} setDescription={setDescription} setSelectedColor={setSelectedColor} selectedColor={selectedColor} setShowAlert={setShowAlert} setAlert={setAlert} />
            <MemoContainer memos={memos} setMemos={setMemos} setShowUpdateModel={setShowUpdateModel} setUpdateId={setUpdateId} setuTitle={setuTitle} setuDescription={setuDescription} setShowAlert={setShowAlert} setAlert={setAlert} />
          </>}></Route>
          <Route exact path='/my-memos' element={<>
            <MemoContainer memos={memos} setMemos={setMemos} setShowUpdateModel={setShowUpdateModel} setUpdateId={setUpdateId} setuTitle={setuTitle} setuDescription={setuDescription} setShowAlert={setShowAlert} setAlert={setAlert} />
          </>}></Route>
        </Routes>
        {showAlert && <Alert setShowAlert={setShowAlert} alert={alert} setAlert={setAlert} />}
        {showUpdateModel && <UpdateModel memos={memos} setMemos={setMemos} utitle={utitle} setuTitle={setuTitle} udescription={udescription} setuDescription={setuDescription} setShowUpdateModel={setShowUpdateModel} updateId={updateId} setShowAlert={setShowAlert} setAlert={setAlert} />}
        {showGreet && <Greet greet={greet} setShowGreet={setShowGreet} />}
        <Contact setShowAlert={setShowAlert} setAlert={setAlert} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
