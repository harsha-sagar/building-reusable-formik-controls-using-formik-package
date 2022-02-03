import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../formik/FormikControl';

function RegistrationForm() {
	const initialValues = {
		email: '',
		password: '',
		confirmPassword: '',
		contactMode: '',
		phone: ''
	}

	const mocOptions = [
		{key: 'Email', value: 'email'},
		{key: 'Phone', value: 'phone'},
	]

	const validationSchema = Yup.object({
		email: Yup.string().email('invalid email format').required('Required'),
		password: Yup.string().required('Required'),
		confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords should match').required('Required'),
		contactMode: Yup.string().required('Required'),
		phone: Yup.string().when('contactMode', {is: 'phone', then: Yup.string().required('Required')})		
	})

	const onSubmit = (values) => console.log('Form data: ', values)

	return <Formik 
		initialValues={initialValues}
		validationSchema={validationSchema}
		validateOnMount={true}
		onSubmit={onSubmit}>
		{
			(formik) => <Form>
				<FormikControl control='input' name="email" label="Email" type="email" />
				<FormikControl control='input' name="password" label="Password" type="password" />
				<FormikControl control='input' name="confirmPassword" label="Confirm Password" type="password" />
				<FormikControl control='radio' name="contactMode" label="Mode of contact" options={mocOptions}/>
				<FormikControl control='input' name="phone" label="Phone" type="text" />
				<button type="submit" disabled={!formik.isValid}>Submit</button>
			</Form>
		}
	</Formik>;
}

export default RegistrationForm;
