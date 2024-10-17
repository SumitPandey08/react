import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider , createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import './index.css'
import Contact from './components/Contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       } ,
//       {
//         path: "about",
//         element: <About/>
//       } ,
//       {
//         path: "contact",
//         element: <Contact/>
//       },
//       {
//         path: "user/:userid" ,
//         element: <User/>
//       },
//       {
//         path: "github",
//         element:<Github/>,
//         loader:{githubInfoLoader}
      
//       }



//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)