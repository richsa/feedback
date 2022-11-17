import React from 'react'
import Card from './shared/Card'
import {useState, useContext, useEffect} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    // use state for entering a data into the app
    const [text, setText] = useState('')
    // use state for storing the type of data of our button
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating ,setRating] = useState()

    // use state for entering message into the app // output of the message 
    const [message, setMessage] = useState('')
    // we want to mange and handle the textchange

    const handleTextChange =(e)=>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !==''&& text.trim().length<=10 ){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
        //console.log(e.target.value)
    }
    const handleSumbmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback ={
                text, 
                rating,
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }
            else{
                addFeedback(newFeedback)
            }
            setText('');
        }
    }
  return (
    <Card>
        <form onSubmit={handleSumbmit}>
            <h2>How would you rate our service</h2>
            <RatingSelect  select = {(rating) =>
                setRating(rating)}/>
            <div className='input-group'>
                <input onChange={handleTextChange}
                 type="text" 
                 placeholder='Write a review'
                 value={text} />
                <Button type='submit' isDisabled={btnDisabled}>Send </Button>
            </div>
            { message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm