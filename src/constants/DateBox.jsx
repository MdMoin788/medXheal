
const DateBox = ({ name, type, inputsize, onchangeHandler, paylaod,  prevdata,  }) => {
    return (
        <input
            name={name}
            type={type}
            className={`form-control form-control-solid me-3 ${inputsize}`}
            defaultValue={prevdata}
            onChange={(event) => onchangeHandler({ ...paylaod, [event.target.name]: event.target.value })}
        />
    )
}


export default DateBox

{/* <InputBox   name="text" type="text" inputsize="col-12" onchangeHandler={setUser} paylaod={paylaod} prevdata={user}  /> */ }
