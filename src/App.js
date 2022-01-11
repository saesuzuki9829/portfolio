import { Route, Switch, useLocation } from "react-router"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"


//Components
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import ProjectPage from './components/ProjectPage'
import WorkPage from './components/WorkPage'
import MySkillsPage from './components/MySkillsPage'
import JobOfferPage from './components/JobOfferPage'
import { AnimatePresence } from "framer-motion"

import Ecsite from "./components/test/Ecsite"


function App() {

  const location = useLocation();
  return <>


  <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

{/* For framer-motion animation on page change! */}
<AnimatePresence exitBeforeEnter>
<Switch  location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/project" component={ProjectPage}/>
      <Route exact path="/work" component={WorkPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>
      <Route exact path="/joboffer" component={JobOfferPage}/>
      <Route exact path="/ecsite" component={Ecsite}/>
    </Switch>
</AnimatePresence>
    
    
    </ThemeProvider>


    
    </>
    
}

export default App