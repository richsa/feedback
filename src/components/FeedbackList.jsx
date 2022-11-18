import FeedbackItem from "./FeedbackItem"
//import PropTypes from "prop-types"
import React from 'react'
import { useContext } from "react"
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"


function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)
   // we wanna check and know if the feedback is empty  and based upon that we give a message to the  user
if (!isLoading &&(!feedback || feedback.length === 0 )){
    return <p> No Feedback</p>
}

return isLoading ?(
  /*<h3>Loading ...</h3>*/
  <Spinner />
):(
  <div className='feedback-list'> 
  <AnimatePresence>
      {feedback.map((item)=>{
  return  <motion.div key={item.id}
    initial={{opacity :0}}
    animate ={{opacity :1}}
    exit = {{opacity: 0}}
    >
     <FeedbackItem
     key={item.id}
     item={item}
     // since the item is found in the App js file we will have to go up to the app level in order for our function to work.
     // so we wiil do that by passing in a props instead of just passing a function
     // handleDelete={(id)=>console.log(id)}/>
     />
      </motion.div>
      }
     )}
     </AnimatePresence>
  </div>
)

  // return (
  //   <div className='feedback-list'> 
  //       {feedback.map((item)=>{

  //     return <FeedbackItem
  //      key={item.id}
  //      item={item}
  //      // since the item is found in the App js file we will have to go up to the app level in order for our function to work.
  //      // so we wiil do that by passing in a props instead of just passing a function
  //      // handleDelete={(id)=>console.log(id)}/>
  //       handleDelete={handleDelete}/>
  //       }
  //      )}
  //   </div>
  // )

}
/*
FeedbackList.prototype ={
  feedback : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number.isRequired,
      text : PropTypes.string.isRequired,
      rating : PropTypes.number.isRequired

    })
  ),
  
}*/

export default FeedbackList