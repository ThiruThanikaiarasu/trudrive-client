import React from 'react'
import Input from '../../elements/Input'

function FormInputComponent({ label, type, name, placeholder, value, onChange, error }) {
    return (
        <div className="mb-6">
            <label className="block text-sm font-medium mb-2">{label}</label>
            <Input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    )
}

export default FormInputComponent
