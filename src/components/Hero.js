import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Sidebar from './Sidebar';
import { Tabs, Form, Tab, Row, Col, Nav, Accordion, Button, Modal, FloatingLabel } from "react-bootstrap";
const Hero = () => {
	const [show, setShow] = useState(false);

	const toggle = () => {
		setShow(!show);
	};
	const [show1, setShow1] = useState(false);
	const handleClose = () => setShow1(false);
	const handleShow = () => setShow1(true);
	return (
		<>
		<div className="container1">
			<Navbar toggle={toggle}></Navbar>
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">Ready to Trail?</h1>
					<p>
						So what are you waiting for? Reach us now, book your dream tour and world of a incredible vacation with TrailTravlers!
					</p>
					<Button className="btn" size="lg" onClick={handleShow}>Book now</Button>
				</div>
			</div>
		</div>
		<Modal
				size="lg"
				show={show1}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}

			>
				<Modal.Header closeButton>
					<Modal.Title>Book Now!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form name="contact"
						method="POST"
						data-netlify="true"
						onSubmit="submit"
						className="form"
						>
						<input type="hidden" name="form-name" value="contact" />
						<p>
							<label>Your Name: <input type="text" name="name" /></label>
						</p>
						<p>
							<label>Your Email: <input type="email" name="email" /></label>
						</p>

						<p>
							<label>Desired Destination: <input type="text" name="dest" /></label>
						</p>
						<p>
							<button class="sideRoute" type="submit">Send</button>
						</p>
					</form>
				</Modal.Body>
			</Modal>
	</>
	);
};

export default Hero;
