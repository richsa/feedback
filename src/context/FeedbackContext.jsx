import React, { useState , createContext, useEffect} from 'react'
//import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()
export const FeedbackProvider =({children}) =>{
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false
  })
  // loading our data from the backend using the useEffect function
  useEffect(() =>{
    fetchFeedback()
  },[])

  // Fetch feedback

  const fetchFeedback = async () =>{
    // create a variable to hold and call the data from the server 
    const response = await fetch(`/feedback?_sort=id&_order=asc`)
    // retrieve our data by storing it in  a variable data
    const data  = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

 // function to delete feedback
  const deleteFeedback = async(id) =>{
    if(window.confirm('are you sure wanna delete')){
       await fetch(`/feedback/${id}`,{
        method :'DELETE'
       })
        setFeedback(feedback.filter((item)=> item.id !== id))
    }
  
}

// function to add new feedback
// adding a feedback item using the post request
const addFeedback = async (newFeedback) =>{
  const response = await fetch('/feedback',{
    method : 'POST',
    headers :{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(newFeedback)
  })
  const data = await response.json()

 
 setFeedback([data, ...feedback])
}

  // function to edit feedback
const editFeedback = (item) =>{
  setFeedbackEdit({
    item, 
    edit : true
  })
}
// function to update feedback
const updateFeedback = async(id, updItem) =>{
  const response = await fetch(`/feedback/${id}`,{
    method : 'PUT',
    headers :{
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(updItem)
  })
  const data = await response.json()
  setFeedback(
 feedback.map((item) => (item.id === id ? {...item, ...data}: item))
)}

// in this return we return functions and state data
  return <FeedbackContext.Provider value={{
    feedback :feedback,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,// this the  function that run when we click on the edit button
    feedbackEdit, // this is the actual piece of state  that holds the item and boolen
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>

}
export default FeedbackContext