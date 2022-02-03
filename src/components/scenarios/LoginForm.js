import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../formik/FormikControl';

function LoginForm() {
	const initialValues = {
		email: '',
		password: ''
	}

	const validationSchema = Yup.object({
		email: Yup.string().email('invalid email format').required('Required'),
		password: Yup.string().required('Required')
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
				<button type="submit" disabled={!formik.isValid}>Submit</button>
			</Form>
		}
	</Formik>;
}

export default LoginForm;
