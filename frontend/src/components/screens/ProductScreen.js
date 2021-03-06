import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col,Card,Button,ListGroup,Image, ListGroupItem } from 'react-bootstrap'
import Rating from '../Rating'
import products from '../../products'

const ProductScreen = ({ match }) => {
    const product =products.find((p)=>p._id ===match.params.id)
    return (
        <>
           <Link className="btn btn-primary my-3" to="/">
               Go back
           </Link>
           <Row>
               <Col md={6}>
                   <Image src={product.image} fluid ></Image>
               </Col>
               <Col md={3}>
                   <ListGroup variant="flush">
                       <ListGroup.Item>
                           <h3>{product.name}</h3>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <Rating value={product.rating} text={`${product.numReviews} reviews`}  >

                           </Rating>
                       </ListGroup.Item>
                       <ListGroup.Item>
                            Price:&#x20B9;{product.price}


                       </ListGroup.Item>
                       <ListGroup.Item>
                            Description:{product.description}


                       </ListGroup.Item>


                   </ListGroup>
               </Col>
               <Col md={3}>
                   <Card>
                       <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                <strong>&#x20B9;{product.price}</strong>
                                </Col>
                            </Row>


                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                        {product.countInStock>0? 'Instock' : 'OutOfStock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroupItem>
                            <Button className="btn btn-primary btn-lg btn-block" type="button"
                                    disabled={product.countInStock ===0}
                            >Add to Cart</Button>
                        </ListGroupItem>
                       </ListGroup>
                   </Card>
               </Col>
           </Row>
        </>
    )
}

export default ProductScreen
