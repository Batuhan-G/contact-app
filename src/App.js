import './App.css';
import Contacts from './components/Contacts';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Edit from './components/Contacts/Edit';
import RootLayout from './layouts/RootLayout';
import Error from './components/Contacts/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Contacts />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)

function App() {
  return (
    <div className='App'>
      <div id='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )

}

export default App;
