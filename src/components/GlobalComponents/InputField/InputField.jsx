
function InputField({ inputFields, formData, handleChange }) {
    return inputFields.map((field, index) => (

        <div key={index} className='input-field'>
            <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                ref={field.ref}
                value={formData[field.name]}
                onChange={handleChange}
                required
            />
        </div>
    ))
}

export default InputField