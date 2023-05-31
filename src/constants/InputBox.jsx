
const InputBox = ({ name, placeholder, type, inputsize, onchangeHandler,prevdata, value }) => {
    return (
        <input
            type={type}
            className={`form-control form-control-solid me-3 ${inputsize}`}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={(event) => onchangeHandler({ ...prevdata, [event.target.name]: event.target.value })}
        />
    )
}


export default InputBox

{/* <InputBox name="email" placeholder="Email" type="text" inputsize="col-12" onchangeHandler={setUser} prevdata={user} value={user?.email} /> */}

