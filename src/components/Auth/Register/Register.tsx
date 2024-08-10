import { Formik, Field, ErrorMessage, Form } from 'formik'
import {default as BForm} from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Register(){

	const initialValues = {
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	}

	const onSubmit = () => {
		alert("В разработке!")
	}

	return (
		<Container className='mt-5'>
			<Row className='justify-content-center'>
				<Col md={6} lg={4}>
					<Card className='shadow-sm'>
						<Card.Header className='text-center bg-primary text-white'>
							<h4 className='md-0'>Регистрация</h4>
						</Card.Header>
						<Card.Body>
							<Formik initialValues={initialValues} onSubmit={onSubmit}>
								<Form>
									<BForm.Floating className='mb-3'>
										<>
											<Field id='id_username' type='text' name='username' className='form-control'/>
											<label htmlFor='id_username'>Логин</label>
											<ErrorMessage name='username' component='div' className='error' />
										</>
									</BForm.Floating>
									<BForm.Floating className='mb-3'>
										<>
											<Field id='id_email' type='email' name='email' className='form-control'/>
											<label htmlFor='id_email'>Электронная почта</label>
											<ErrorMessage name='email' component='div' className='error' />
										</>
									</BForm.Floating>
									<BForm.Floating className='mb-3'>
										<>
											<Field id='id_password' type='password' name='password' className='form-control'/>
											<label htmlFor='id_password'>Пароль</label>
											<ErrorMessage name='password' component='div' className='error' />
										</>
									</BForm.Floating>
									<BForm.Floating className='mb-3'>
										<>
											<Field id='password_confirm' type='password' name='passwordConfirm' className='form-control'/>
											<label htmlFor='password_confirm'>Подтверждение пароля</label>
											<ErrorMessage name='passwordConfirm' component='div' className='error' />
										</>
									</BForm.Floating>
									<BForm.Floating className='d-grid'>
										<>
											<Button variant='primary' type='submit'>Зарегистрироваться</Button>
										</>
									</BForm.Floating>
								</Form>
							</Formik>
						</Card.Body>
						<Card.Footer className='text-center'>
							<a href='/auth/login/'>Уже есть аккаунт? Войдите</a>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}