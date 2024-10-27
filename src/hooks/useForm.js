import {  useState } from 'react'
import useUserContext from '../hooks/useUserContext'
import { validateLoginForm, validateSignupForm, validateSignupEmail } from '../utils/formValidation'

const useForm = (onSubmit, formType) => {
    const { signupFormData, setSignupFormData } = useUserContext()
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setSignupFormData((prevData) => ({ ...prevData, [name]: value }))
        setErrors((prevErrors) => ({ ...prevErrors, [name]: null }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let validationErrors
        if (formType === 'login') {
            validationErrors = validateLoginForm(signupFormData)
        } else if (formType === 'signup-email') {
            validationErrors = validateSignupEmail(signupFormData)
        } else {
            validationErrors = validateSignupForm(signupFormData)
        }
        if (Object.keys(validationErrors).length === 0) {
            onSubmit(signupFormData)
        } else {
            setErrors(validationErrors)
        }
    }

    return { formData: signupFormData, errors, handleChange, handleSubmit, setErrors }
}

export default useForm
