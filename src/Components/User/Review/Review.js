import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Review = () => {
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null)
    const onSubmit = review => {
        const reviewInfo = {
            name: review.name,
            company: review.company,
            description: review.description,
            image: image
        };

        const url = 'https://polar-dawn-10437.herokuapp.com/review'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Review Successfully')
                }
            })
    }

    const handleImageUpload = event => {
        const imageData = new FormData();
        console.log(event.target.files[0])
        imageData.set('key', 'a68051547e5c105cf6cb5cee8b67d4bd')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage(response.data.data.display_url)
            });

    }

    return (
        <div className="container w-75">
            <form className="d-flex flex-column  my-5 gap-3 w-25" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" placeholder="Your Name" ref={register} />
                <input type="text" name="company" placeholder="Company Name" ref={register} />
                <input type="text" name="description" placeholder="Description" ref={register} />
                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                <input style={{ backgroundColor: 'LightCoral', color: 'white', border: 'none', height: '35px' }} type="submit" value="save" />
            </form>
        </div>
    );
};

export default Review;