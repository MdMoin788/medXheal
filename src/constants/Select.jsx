
const Select = ({onchangeHandler, array, title}) => {
    return (
        
        <select
            name='date_typer'
            aria-label='Select a Timezone'
            data-control='select2'
            data-placeholder='Period'
            className='form-select form-select-sm form-select-solid'
            onChange={(event) => onchangeHandler(event)
            }
        >
            < option value="">{title}</option>
            {
                array?.map((element) => {
                    return < option value={element?.id}>{element?.name}</option>
                })
            }
        </select >
    )
}

export default Select
