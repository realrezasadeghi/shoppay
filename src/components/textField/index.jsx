import TextFieldForm from "./textFieldForm";

function TextFieldRoot(
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
            <fieldset className={'border rounded hover:border-amber-500 px-2'}>
                <legend className={'text-xs text-zinc-500 px-1'}>{label}</legend>
                <input className={'w-full bg-transparent focus:outline-none p-2'} name={name} type={type} {...props}/>
            </fieldset>
            {helperText ? <p className={'text-xs text-red-500 mx-2 my-1'}>{helperText}</p> : null}
        </div>
    )
}

const TextField = Object.assign(TextFieldRoot, {
    Form: TextFieldForm
});

export default TextField;
