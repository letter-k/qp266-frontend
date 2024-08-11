import { LoginCredentials, LoginApiCredentials } from '../../../shared/types'
import { tokenToStorageSet } from '../../../shared/libs/localStorageHandler'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import Container from 'react-bootstrap/Container'
import { apiService } from '../../../shared/libs/apiService'
import { baseUrl } from '../../../shared/constants/baseUrl'
import {default as BForm} from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'
import * as Yup from 'yup'

export const loginUser = async (data: LoginCredentials) => {
	const result = await apiService.post('auth/login/', {json: data}).json<LoginApiCredentials>()
	tokenToStorageSet(result.token)
	window.location.replace(baseUrl)
}

export default function Login(){
	const [error, setError] = useState('')

	const validationSchema = Yup.object().shape({
		username: Yup
			.string()
			.required('Введите логин'),
		password: Yup
			.string()
			.required('Введите пароль'),
	})

	const initialValues = {
		username: '',
		password: ''
	}

	const onSubmit = async (data: LoginCredentials) => {
		setError('')
		try {
			await loginUser(data)
		} catch (error){
			setError('Неверный логин или пароль')
		}
	}

	return (
		<Container className='mt-5'>
			<Row className='justify-content-center'>
				<Col md={6} lg={4}>
					<Card className='shadow-sm'>
						<Card.Header className='text-center bg-primary text-white'>
							<h4 className='md-0'>Вход</h4>
						</Card.Header>
						<Card.Body>
							<Formik initialValues={initialValues} onSubmit={async (values) => onSubmit(values)} validationSchema={validationSchema}>
								<Form>
									<BForm.Floating className='mb-3'>
										<div className='error' style={{ color: 'red' }}>{error}</div>
									</BForm.Floating>
									<BForm.Floating className='mb-3'>
										<>
											<Field id='id_username' type='text' name='username' className='form-control'/>
											<label htmlFor="id_username">Логин</label>
											<ErrorMessage name='username' component='div' className='error'/>
										</>
									</BForm.Floating>
									<BForm.Floating className='mb-3'>
										<>
											<Field id='id_password' type='password' name='password' className='form-control'/>
											<label htmlFor="id_password">Пароль</label>
											<ErrorMessage name='password' component='div' className='error'/>
										</>
									</BForm.Floating>
									<BForm.Floating className='d-grid'>
										<>
											<Button variant='primary' type='submit'>Войти</Button>
										</>
									</BForm.Floating>
								</Form>
							</Formik>
						</Card.Body>
						<Card.Footer className='text-center'>
							<small>Нет аккаунта? <Link to='/auth/register/'>Зарегистрируйтесь</Link></small>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}