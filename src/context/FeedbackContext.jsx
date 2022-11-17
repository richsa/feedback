import React, { useState , createContext} from 'react'
import { v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()
export const FeedbackProvider =({children}) =>{
  const [feedback, setFeedback] = useState([

    {
      id : 1, 
      text: 'This is feedback item 1',
      rating :10
    },
    {
      id : 2, 
      text: 'This is feedback item 2',
      rating :9
    },
    {
      id : 3, 
      text: 'This is feedback item 3',
      rating :7
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit: false
  })

 // function to delete feedback
  const deleteFeedback = (id) =>{
    if(window.confirm('are you sure wanna delete')){
        setFeedback(feedback.filter((item)=> item.id !== id))
    }
  
}

// function to add new feedback
const addFeedback = (newFeedback) =>{
  newFeedback.id=uuidv4()
 setFeedback([newFeedback, ...feedback])
}

  // function to edit feedback
const editFeedback = (item) =>{
  setFeedbackEdit({
    item, 
    edit : true
  })
}
// function to update feedback
const updateFeedback = (id, updItem) =>{
  setFeedback(
 feedback.map((item) => (item.id === id ? {...item, ...updItem}: item))
)}

  return <FeedbackContext.Provider value={{
    feedback :feedback,
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