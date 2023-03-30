function TextField(
    {
        type,
        name,
        label,
        helperText,
        endAdornment,
        startAdornment,
        error = false,
        fullwidth = false,
        ...props
    }) {

    return (
        <div className={'w-full cursor-text'}>
            <label htmlFor={label}>{label}</label>
            <fieldset className={'border rounded hover:border-amber-500 px-2'}>
                <legend className={'px-1 text-zinc-500 text-xs'}>First Name</legend>
                <input className={'w-full bg-transparent focus:outline-none p-2'} name={name} type={type} {...props}/>
            </fieldset>
            <p className={'text-xs text-red-500 mx-2 my-1'}>Name is Required</p>
        </div>
    )
}

export default TextField;
