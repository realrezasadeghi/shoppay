import Button from "@/components/button";
import TextField from "@/components/textField";
import AuthLayout from "@/layouts/AuthLayout";
import { FormProvider, useForm } from "react-hook-form";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const methods = useForm({ mode: "onChange", defaultValues });
  const onSubmit = () => {};
  return (
    <AuthLayout title={"Sign up"}>
      <FormProvider>
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TextField label={"Name"} name="name" />
          <TextField label={"E-mail"} name="email" type={"email"} />
          <TextField label={"Password"} name="password" type={"password"} />
          <TextField
            label={"Confirm password"}
            name="confirmPassword"
            type={"password"}
          />
          <Button label={"Submit"} />
        </form>
      </FormProvider>
    </AuthLayout>
  );
}

export default Signup;
