import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

import { Link } from 'react-router-dom';



const Product = ({product}) => {
    return (
        <Card className='my-3 py-3 rounded'>
            <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image}  variant='top' />



            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
            <Card.Title as='div' >
            <strong>{product.name}</strong>
            </Card.Title>
            </Link>


            <Card.Text as='div'>
            <Rating value={product.rating} 
            text={`${product.numReviews} reviews`}  
            
            />


            </Card.Text>
            <Card.Text>
            <div className="h3">
            &#x20B9;{product.price}
            </div>
            </Card.Text>
            </Card.Body>

          
          </Card>
      
    )
}
Rating.defaultProps={
    color:'#FBBF24'
}


export default Product
