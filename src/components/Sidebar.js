import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Tabs, Form, Tab, Row, Col, Nav, Accordion, Button, Modal, FloatingLabel } from "react-bootstrap";

const Sidebar = ({ toggle, show }) => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		toggle();
		element.scrollIntoView({
			behavior: 'smooth',
		});

	}
	const [show1, setShow1] = useState(false);
	const handleClose = () => setShow1(false);
	const handleShow = () => setShow1(true);

	return (
		<>
			<div className={`sideContainer ${show ? 'show' : ''}`}>
				<div className="close" onClick={toggle}>
					Close
				</div>
				<div className="sideMenu">
					<Link to="/" className="sideLink" onClick={() => scrollTo('menu')}>
						Travel with Us!
					</Link>
					<Link to="/" className="sideLink" onClick={() => scrollTo('favorite')}>
						Heaven
					</Link>
					<Link to="/" className="sideLink" onClick={() => scrollTo('staff')}>
						Creators
					</Link>

					<div className="btnWrap">
						<Button onClick={handleShow}> Book now</Button>
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
							<label>Your Name: <input type="text" name="name" required/></label>
						</p>
						<p>
							<label>Your Email: <input type="email" name="email" required/></label>
						</p>

						<p>
							<label>Desired Destination: <input type="text" name="dest" required/></label>
						</p>
						<p>
							<Button  type="submit">Send</Button>
						</p>
					</form>
				</Modal.Body>
			</Modal>
		</>

	);

};

export default Sidebar;
