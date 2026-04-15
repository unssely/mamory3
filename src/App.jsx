import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PageMain from './pages/PageMain/PageMain'
import PageGame from './pages/PageGame/PageGame'
import Page404 from './pages/Page404/Page404'
import PageImages from './pages/PageImages/PageImages'
import List from './components/List'
import Item from './components/Item'

function App() {
  return (
    <BrowserRouter basename='/mamory3'>
      <Routes>
        <Route path='/' element={<PageMain />} />
        <Route path='/game' element={<PageGame />} />
        <Route path='/images' element={ <PageImages /> }>
            <Route path='list' element={ <List />} />
            <Route path='item/:id' element={ <Item />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
