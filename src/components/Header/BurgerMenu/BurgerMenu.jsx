import React, { useState } from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom"
import { stack as Menu } from 'react-burger-menu'
import styles from './BurgerMenu.scss'
import Home from "../../../pages/Home/Home"
import About from "../../../pages/About/About"
import Contacts from "../../../pages/Contacts/Contacts"
import Appointments from '../../../pages/Services/Appointments'
import Coaching from '../../../pages/Services/Coaching'
import Reiki from '../../../pages/Services/Reiki'
import BodyLanguage from '../../../pages/Services/BodyLanguage'
import NeuroLinguisticProgramming from '../../../pages/Services/NeuroLinguisticProgramming'
import Hypnotherapy from '../../../pages/Services/Hypnotherapy'

const BurgerMenu = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => {
		setMenuOpen(false);
	}

	const handleStateChange = (state) => {
		setMenuOpen(state.isOpen)
	}

	return (
		<Router>
			<Menu styles={styles} right isOpen={menuOpen} onStateChange={(state) => handleStateChange(state)}>
				<Link id="home" className="menu-item" to="/" onClick={() => closeMenu()}>Home</Link>
				<Link id="about" className="menu-item" to="/about" onClick={() => closeMenu()}>About</Link>
				<Link id="hypnotherapy" className="menu-item" to="/hypnotherapy" onClick={() => closeMenu()}>Hipnoterapia</Link>
				<Link id="neuro-linguistic-programming" className="menu-item" to="/neuro-linguistic-programming" onClick={() => closeMenu()}>PNL</Link>
				<Link id="body-language" className="menu-item" to="/body-language" onClick={() => closeMenu()}>Linguagem Corporal</Link>
				<Link id="reiki" className="menu-item" to="/reiki" onClick={() => closeMenu()}>Reiki</Link>
				<Link id="coaching" className="menu-item" to="/coaching" onClick={() => closeMenu()}>Coaching</Link>
				<Link id="appointments" className="menu-item" to="/appointments" onClick={() => closeMenu()}>Consultas</Link>
				<Link id="contacts" className="menu-item" to="/contacts" onClick={() => closeMenu()}>Contacts</Link>
			</Menu>

			<Switch>
				<Route path="/contacts">
					<Contacts />
				</Route>
				<Route path="/appointments">
					<Appointments />
				</Route>
				<Route path="/coaching">
					<Coaching />
				</Route>
				<Route path="/reiki">
					<Reiki />
				</Route>
				<Route path="/body-language">
					<BodyLanguage />
				</Route>
				<Route path="/neuro-linguistic-programming">
					<NeuroLinguisticProgramming />
				</Route>
				<Route path="/hypnotherapy">
					<Hypnotherapy />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default BurgerMenu
