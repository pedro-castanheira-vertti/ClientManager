import '../InputField/style.css'

function InputField(inputFields) {
    return (
        <>
            {inputFields.inputFields.map((field, index) => (
                <div key={index} className='input-field'>
                    <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        ref={field.ref}
                    />
                </div>
            ))}
        </>
    )
}
export default InputField