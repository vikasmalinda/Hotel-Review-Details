import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import  '../css/Loader.css'
import '../css/ReviewCard.css'
import { isJSXFragment } from '@babel/types'
import ReviewCard from '../components/ReviewCard'
import { Container } from 'react-bootstrap'


function ReviewDetails() {

    const url = 'https://jsonplaceholder.typicode.com/comments?_limit=10'
    const [reviews, setReviews] = useState({
        loading : false,
        data : null,
        error : false
    })

    useEffect(() => {
        setReviews({
            loading : true,
            data : null,
            error : false
        })

        axios.get(url)
            .then(response => {
                setReviews({
                    loading : false,
                    data : response.data,
                    error : false
                })
            })
            .catch(() => {
                setReviews({
                    loading : false,
                    data : null,
                    error : true
                })
            })
        }, [url])


    console.log(reviews.data);
    let content = null

    if(reviews.error) {
        content = <p className="text-xl ">
            There was some error please refresh or try again later
        </p>
    }

    if(reviews.loading) {
        content = <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }

    if(reviews.data) {
        content = 
        <div className="review-container">
            <h2 className = "review-head">Hotel Reviews and Ratings</h2><hr></hr>
            {reviews.data.map((review) => 
                <div key={review.id}>
                <ReviewCard
                    review = {review}
                />
                </div>
            )}
        </div>
    }

    return (
        <div>{content}</div>
    )
    
}
 
export default ReviewDetails;