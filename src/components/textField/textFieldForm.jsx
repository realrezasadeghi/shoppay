import TextField from "./index";
import {useController} from "react-hook-form";

function TextFieldForm({name, control, rules, defaultValue, shouldUnregister, ...props}) {
    const {field, fieldState} = useController({name, control, rules, defaultValue, shouldUnregister})

    const handleChange = (e) => {
        field.onChange(e)
    }

    const handleBlur = () => {
        field.onBlur();
    }


    return <TextField
        name={field.name}
        value={field.value}
        onBlur={handleBlur}
        onChange={handleChange}
        helperText={fieldState?.error?.message}
        error={!!fieldState?.error?.message}
        {...props}
    />
}

export default TextFieldForm
