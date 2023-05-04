import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

import { Link } from "react-router-dom"; // import Link from react-router-dom

import Cartpage from "../pages/CartPage";




function Cart() {

    return (

        <Navbar fixed="bottom" className="w-full bg-white border-top shadow-sm">

            <Container>

                <Link to="/cartpage"> {/* Use the Link component with "to" prop set to the URL path of the cart page */}

                    <Button variant="outline-primary">Cart</Button>

                </Link>

                <Button>Checkout</Button>

            </Container>

        </Navbar>

    )

}




export default Cart;