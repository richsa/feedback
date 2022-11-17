 import Header from "./components/Header"
 import FeedbackList from "./components/FeedbackList"
 import React from 'react'
 import FeedbackStats from "./components/FeedbackStats"
 import FeedbackForm from "./components/FeedbackForm"
import { BrowserRouter  as Router, Route,Routes} from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import{FeedbackProvider} from './context/FeedbackContext'
import AboutIconLink from "./components/AboutIconLink"

 


 //import FeedbackItem from "./components/FeedbackItem" 

function App(){

    // basically data
    // component level state : restircted to only a specific component and app level state it extends to all the all component
   // const [feedback, setFeedback] = useState(FeedbackData)

    
    return  (

        <FeedbackProvider>

            <Router>
            <Header  />
            <div className="container">
            <Routes>
            <Route exact path="/" element={
                <>
                    <FeedbackForm  />
                    <FeedbackStats />
                    <FeedbackList /> 
                </>
            }>
            
            </Route>
            <Route path="/about" element={<AboutPage />}></Route>
            </Routes>
            
            </div>
            <AboutIconLink />
            </Router>
        </FeedbackProvider>
    )
}

export default App






























//{showArticle  && articleBlock }

 // to create variables in react you always have to write above the RETURN function
    /*const heading = 'Wall Street Journal'
    const articles =[
        {
            id:1,
            title: "Sports News ",
            publlication : "12th dec 2016"
        },
        {
            id:2,
            title: "ENews ",
            publlication : "12th dec 2016"
        },
        {
            id:3,
            title: "Local News ",
            publlication : "12th dec 2016"
        },
        {
            id:4,
            title: "Politics News ",
            publlication : "12th dec 2016"
        },
    
    ]
    const loading = false
    const showArticle = true
    const articleBlock =  ( <div className="articles">
    <h3>Articles ({articles.length})</h3>
    <ul>
        {articles.map((article, index)=>(
            <li key={index}>{article.title}</li>
        ))}
    </ul>
</div>)*/

