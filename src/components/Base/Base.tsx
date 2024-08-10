import { tokenFromStorageRemove } from '../../shared/libs/localStorageHandler'
import { tokenFromStorageGet } from '../../shared/libs/localStorageHandler'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import { Outlet } from 'react-router-dom'
import Login from '../Auth/Login/Login'

export default function Base(){
	if(tokenFromStorageGet() == null){
		return <Login/>
	}

	const logout = () => {
		tokenFromStorageRemove()
		window.location.reload()
	}

	return (
		<div className='d-flex flex-column h-100'>
			<header>
				<Container>
					<Navbar expand='lg' className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-star'>
						<Nav className='col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
							<Nav.Item>
								<Nav.Link href='#' className='px-2 link-secondary'>Задачи</Nav.Link>
							</Nav.Item>
						</Nav>

						<Dropdown align='end'>
							<Dropdown.Toggle as='a' href='#' className='d-block link-body-emphasis text-decoration-none'>
								<Image src='https://github.com/Frimko.png' alt='Frimko' width='32' height='32' roundedCircle/>
							</Dropdown.Toggle>
							<Dropdown.Menu className='text-small'>
								<Dropdown.Item href='#' onClick={logout}>Выйти</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Navbar>
				</Container>
			</header>
			<Outlet/>
			<footer>
				<Container>
					{/*  */}
				</Container>
			</footer>
		</div>
	)
}