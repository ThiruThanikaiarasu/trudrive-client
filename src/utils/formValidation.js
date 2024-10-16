const validateEmail = (email, errors) => {
    if (!email) {
        errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email address is invalid'
    }
}

const validatePassword = (password, errors) => {
    if (!password) {
        errors.password = 'Password is required'
    }
} 

const validateLoginForm = ({ email, password }) => {
    let errors = {}
    
    validateEmail(email, errors)
    validatePassword(password, errors)
    
    return errors
}

export { validateLoginForm }
