import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../formik/FormikControl';

function EnrollmentForm() {
	const initialValues = {
		email: '',
		bio: '',
		course: '',
		skillset: [],
		courseDate: null
	}

	const selectOptions = [
		{key: 'select course', value: ''},
		{key: 'React', value: 'react'},
		{key: 'Angular', value: 'angular'},
		{key: 'Vue', value: 'vue'}
	]

	const checkBoxOptions = [
		{key: 'HTML', value: 'html'},
		{key: 'CSS', value: 'css'},
		{key: 'JS', value: 'js'}
	]

	const validationSchema = Yup.object({
		email: Yup.string().email('invalid email format').required('Required'),
		bio: Yup.string().required('Required'),
		course: Yup.string().required('Required'),
		skillset: Yup.array().required('Required'),
		courseDate: Yup.date().required('Required').nullable()
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
				<FormikControl control='textarea' name="bio" label="Bio" />
				<FormikControl control='select' name="course" options={selectOptions} />
				<FormikControl control='checkbox' name="skillset" label="Skill set" options={checkBoxOptions}/>
				<FormikControl control='date' name="courseDate" label="Course Date" />
				<button type="submit" disabled={!formik.isValid}>Submit</button>
			</Form>
		}
	</Formik>;
}

export default EnrollmentForm;
