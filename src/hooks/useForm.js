import { useState } from 'react'

import { validateLoginForm, validateSignupForm, validateSignupEmail } from '../utils/formValidation'


const useForm = (initialState, onSubmit, formType) => {

    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(value)
        setFormData((prevData) => ({ ...prevData, [name]: value }))

        setErrors((prevErrors) => ({ ...prevErrors, [name]: null }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let validationErrors
        if( formType == 'login') {
            validationErrors = validateLoginForm(formData)
        } else if( formType == 'signup-email') {
            validationErrors = validateSignupEmail(formData)
        }
        else {
            validationErrors = validateSignupForm(formData)
        }
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(formData)
        } else {
            setErrors(validationErrors)
        }
    }

    return { formData, errors, handleChange, handleSubmit, setErrors }
}

export default useForm
