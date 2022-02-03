import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

function FormikContainer() {
	const dropdownOptions = [
		{ key: 'select an option', value: ''},
		{ key: 'option 1', value: 'option1'},
		{ key: 'option 2', value: 'option2'},
		{ key: 'option 3', value: 'option3'},
		{ key: 'option 4', value: 'option4'},
	]

	const radioOptions = [
		{ key: 'option 1', value: 'roption1'},
		{ key: 'option 2', value: 'roption2'},
		{ key: 'option 3', value: 'roption3'},
		{ key: 'option 4', value: 'roption4'},
	]

	const checkBoxOptions = [
		{ key: 'option 1', value: 'cboption1'},
		{ key: 'option 2', value: 'cboption2'},
		{ key: 'option 3', value: 'cboption3'},
		{ key: 'option 4', value: 'cboption4'},
	]

	const initialValues = {
		email: '',
		description: '',
		selectOption: '',
		radioOption: '',
		checkBoxOption: [],
		dateSelect: ''
	}

	const validationSchema = Yup.object({
		email: Yup.string().required('Required'),
		description: Yup.string().required('Required'),
		selectOption: Yup.string().required('Required'),
		radioOption: Yup.string().required('Required'),
		checkBoxOption: Yup.array().required('Required'),
		dateSelect: Yup.date().required('Required').nullable()
	})

	const onSubmit = (values) => console.log('Form data: ', values)

	return <Formik 
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={onSubmit}>
		{
			(formik) => <Form>
				<FormikControl control='input' name="email" label="Email" type="email" />
				<FormikControl control='textarea' name="description" label="Description" />
				<FormikControl control='select' name="selectOption" label="Select an option" options={dropdownOptions}/>
				<FormikControl control='radio' name="radioOption" label="Radio Topic" options={radioOptions}/>
				<FormikControl control='checkbox' name="checkBoxOption" label="Checkbox Topics" options={checkBoxOptions}/>
				<FormikControl control='date' name="dateSelect" label="Select a date" />
				<button type="submit">Submit</button>
			</Form>
		}
	</Formik>;
}

export default FormikContainer;
