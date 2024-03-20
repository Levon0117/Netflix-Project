import React, { useEffect, useState } from 'react';
import "./Navbar.scss"

export default function Navbar() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
				setShow(window.scrollY > 100)
		})	
	}, []);


	return <div className={`nav ${show && "nav__black"}`}>
		<img
			className='nav__logo'
			src="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
			alt="Netflix logo" />

	</div>
}
