import React from 'react'
import Input from '../../elements/Input'

function FormInputComponent({ label, type, name, placeholder, value, onChange, error }) {
    return (
        <div className="relative">
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 text-gray-900 border border-gray-400 rounded-md focus:border-blue-500 focus:outline-none focus:ring-0 transition-all duration-200 peer"
    />
    {error && <span className="text-red-500 text-sm">{error}</span>}

</div>

    )
}

export default FormInputComponent
