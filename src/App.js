import './App.scss'
import Header from './section/Header'
import Content from './section/Content'
import Loader from './section/Loader'

function App() {
  return (
    <>      
      <main>
        <Loader />
        <Header />
        <Content />
      </main>
    </>
  )
}

export default App
