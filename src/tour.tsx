import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Tour() {
    return (
        <div className='tour'>
            <div>
                <p className='tour-title'>TOUR DATES</p>
                <p className='tour-sentence'>Remember to book your tickets!</p>
            </div>
            <div>
                <div className='tour-dates'>
                    <p className='tourdates-month'>Semptember</p> 
                    <p className='tourdates-avability'>Sold out</p></div>
                <div className='tour-dates'>
                    <p className='tourdates-month'>October</p>
                    <p className='tourdates-avability'>Sold out</p></div>
                <div className='tour-dates'>
                    <p className='tourdates-month'>November</p>
                    </div>
            </div>
            <div className='tour-cards'>
                <Card className='tour-card' style={{ width: '18rem' }}>
                    <Card.Img variant="top"  src="https://www.w3schools.com/w3images/newyork.jpg" />
                    <Card.Body>
                        
                        <Card.Title>New York</Card.Title>
                        <p className='tour-card-date'>Fri 27 Nov 2016</p>
                        <Card.Text>
                            Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                        </Card.Text>
                        <Button className='tour-card-button' variant="">Buy tickets</Button>
                    </Card.Body>
                </Card>
                <Card className='tour-card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.w3schools.com/w3images/paris.jpg" />
                    <Card.Body>

                        <Card.Title>Paris</Card.Title>
                        <p className='tour-card-date'>Sat 28 Nov 2016</p>
                        <Card.Text>
                            Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                        </Card.Text>
                        <Button className='tour-card-button' variant="">Buy tickets</Button>
                    </Card.Body>
                </Card>
                <Card className='tour-card' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.w3schools.com/w3images/sanfran.jpg" />
                    <Card.Body>

                        <Card.Title>San Fransisco</Card.Title>
                        <p className='tour-card-date'>Sun 29 Nov 2016</p>
                        <Card.Text>
                            Praesent tincidunt sed tellus ut rutrum sed vitae justo.
                        </Card.Text>
                        <Button className='tour-card-button' variant="">Buy tickets</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Tour
