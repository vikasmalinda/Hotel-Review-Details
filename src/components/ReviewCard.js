import React from 'react'
import '../css/ReviewCard.css'
import GetStar from './GetStar'

function ReviewCard(props) {

    return (
        <div className="review-card">
            
            <div className="profileImage">{props.review.name.charAt(0)}</div>
            <div className="review-name">{props.review.email}</div>
            <div className="review-rating">
                    <GetStar rating = {1}/>
                    <GetStar rating = {2}/>
                    <GetStar rating = {3}/>
                    <GetStar rating = {4}/>
                    <GetStar rating = {5}/>
            </div>
            <div><small className="time">Posted on : 4 Aug, 2021</small></div>
            <p className="review-body">{props.review.body}</p>
        </div>
    )

}

export default ReviewCard