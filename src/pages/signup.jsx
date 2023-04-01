import Link from "next/link";
import * as yup from "yup";
import Button from "@/components/button";
import AuthLayout from "@/layouts/AuthLayout";
import { useSignup } from "@/api/auth/signup";
import TextField from "@/components/textField";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const signUpValidation = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name is min 2 char"),
  email: yup
    .string()
    .required("E-mail is required")
    .email("E-mail is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is min 8 char"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Password not match"),
});

function Signup() {
  const router = useRouter();
  const methods = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(signUpValidation),
  });
  const { mutate: signupUser, isLoading: isSignupLoading } = useSignup();

  const onSubmit = (data) => {
    signupUser(data, {
      onSuccess: (data) => {
        router.replace("/signin");
      },
    });
  };

  return (
    <AuthLayout title={"Sign up"}>
      <FormProvider {...methods}>
        <form
          className={"w-full flex flex-col gap-4"}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TextField.Form name={"name"} label={"Name"} type={"text"} />
          <TextField.Form name={"email"} label={"E-mail"} type={"email"} />
          <TextField.Form
            name={"password"}
            label={"Password"}
            type={"password"}
          />
          <TextField.Form
            name={"confirmPassword"}
            label={"Confirm password"}
            type={"password"}
          />
          <Link
            href={"/forget-password"}
            className={"text-sm text-gray-400 hover:text-gray-700"}
          >
            Are you already account ? Sign in
          </Link>
          <Button
            label={"Submit"}
            type={"submit"}
            disabled={!methods.formState.isValid || isSignupLoading}
          />
        </form>
      </FormProvider>
    </AuthLayout>
  );
}

export default Signup;
