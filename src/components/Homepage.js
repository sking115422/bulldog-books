/* eslint-disable react/jsx-no-target-blank */
import React, {useState, useEffect} from 'react'
import { Card, ListGroup, ListGroupItem, Col, Row, Container } from 'react-bootstrap'

import Promos from  './Promos'
import BestSellers from './BestSeller'
import StoreNavbar from './StoreNavbar'
// import { booksData } from '../data/books'
import './styles/Homepage.css'
import './styles/Background.css'


function User(){

    const [books, setBooks] = useState([])

    useEffect(() => {
        async function fetchBooks(){
            const response = await fetch('http://localhost:3000/api/books')
            const data = await response.json()
            setBooks(data)
        }
        fetchBooks()
    }, [])

    console.log(books)
    const bookCards = books.map(book => (
        <>
            {/* <Col key={book.isbn} xs='3' >
                <Card >
                    <Card.Img variant="top" src={book.image} />
                    <ListGroup id = "lG-hp"  className="list-group-flush"/>
                </Card>
            </Col> */}
            <Col key={book.isbn} xs='3' id = "column-hp">
                <Card id = "card-style-hp">
                    <Card.Img className = "mx-auto" id = "image-hp" src={book.cover} />
                    <ListGroup className="list-group-flush" >
                        <ListGroupItem>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Subtitle className="text-muted">{book.subtitle}</Card.Subtitle>
                        </ListGroupItem>
                    </ListGroup>  
                    <ListGroup id = "lG-hp" className="list-group-flush">
                        <ListGroupItem>Author: {book.author}</ListGroupItem>
                    </ListGroup>
                    <ListGroup id = "lG-hp" className="list-group-flush">
                        <ListGroupItem>Price: ${book.buyPrice}</ListGroupItem>
                    </ListGroup>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            <Card.Link href={book.website}>More Info</Card.Link>
                            <Card.Link href="">Add To Cart</Card.Link>
                        </ListGroupItem>                   
                    </ListGroup>
                </Card>
            </Col>
        </>

    ))

    return (
        <div id = "background">
            <StoreNavbar/> 
            <Container id = "cont-hp">
                <Row className ="mx-auto" id = "promo-bestseller-row-hp">
                    <Col className ="mx-auto" id = "col-onsale-hp"> 
                        <div className="text-danger" id = "title-hp"> On Sale </div>
                        <Promos/> 
                    </Col>
                    <Col className ="mx-auto" id = "col-bestseller-hp">
                        <div className="text-white" id = "title-hp"> Best Sellers </div> 
                        <BestSellers/>
                    </Col>
                </Row>
                <Row lg={3} >
                    {bookCards}
                </Row>
            </Container>
        </div>
    )

    
}

export default User
