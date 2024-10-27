import React from 'react'
import Input from '../../elements/Input'

function FormInputComponent({ label, type, name, placeholder, value, onChange, error }) {
    return (
        <div className="relative">
    <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 text-slate-900 border border-gray-400 rounded-md focus:border-blue-400 appearance-none focus:outline-none focus:ring-1 focus:ring-blue-100 transition-all duration-200 peer"
    />
    {error && <span className="text-red-500 text-xs">{error}</span>}

</div>

    )
}

export default FormInputComponent
