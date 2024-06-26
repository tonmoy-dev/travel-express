import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { serverBaseURL } from "../../Utilities/getURL";
import Place from "../Place/Place";

const BookingPlaces = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch(`${serverBaseURL}/booking_places`)
            .then(res => res.json())
            .then(data => setPlaces(data))
        
    }, []);
    return (
        <div>
            <Container className="py-5">
                <h2 className="text-center my-4">BEST BOOKING OFFERS</h2>
                {
                    places.length === 0 ?
                        <div className="d-flex justify-content-center align-items-center my-5">
                            <Spinner className="text-center" animation="border" variant="dark" />
                        </div>

                        :
                        <Row xs={1} md={2} className="g-4">
                            {
                                places.map(place => <Place
                                    key={place.name}
                                    place={place}
                        
                                ></Place>)
                            }
                        </Row>
                }
            </Container>
        </div>
    );
}

export default BookingPlaces;