  import { Routes, Route, Outlet } from "react-router-dom" 
  import { Navbar } from "./components/Navbar"
  import { Home } from "./Pages/Home"
  import { About } from "./Pages/About"
  import { Contact } from "./Pages/Contact"
  import { Services } from "./Pages/Services"




  function Layout() {
    // const theme = useMantineTheme();
    // const dark = theme.colorScheme === 'dark';  

    return (
      <>
      <main className="">
        <div className="">
            <Navbar /> 
        </div>
        
          <Outlet />
      </main>
      </>
    )
  }

  function App() {

    return (
      <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
        </Route>
      </Routes>

      </>
    )
  }

  export default App 