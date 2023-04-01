import * as yup from "yup";
import Link from "next/link";
import Button from "@/components/button";
import AuthLayout from "@/layouts/AuthLayout";
import TextField from "@/components/textField";
import ListSocials from "@/components/listSocials";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
} from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";

const defaultValues = {
  email: "",
  password: "",
};

const signInValidation = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password min 8 char"),
});

function Signin({ socials, csrfToken, callbackUrl }) {
  const router = useRouter();
  const methods = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(signInValidation),
  });

  const onSubmit = async (data) => {
    const options = {
      ...data,
      redirect: false,
    };
    const user = await signIn("credentials", options);
    if (user) router.push(callbackUrl || "/");
  };

  return (
    <AuthLayout title={"Sign in"}>
      <FormProvider {...methods}>
        <form
          className={"w-full flex flex-col gap-4"}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TextField.Form name={"email"} label={"E-mail"} type={"email"} />
          <TextField.Form
            name={"password"}
            label={"Password"}
            type={"password"}
          />
          <Link
            href={"/forget-password"}
            className={"text-sm text-gray-400 hover:text-gray-700"}
          >
            Forget password ?
          </Link>
          <Button
            label={"Submit"}
            type={"submit"}
            disabled={!methods.formState.isValid}
          />
          <p className={"text-center text-xs text-gray-400"}>Or Continu With</p>
          <ListSocials socials={socials} onClick={(id) => signIn(id)} />
        </form>
      </FormProvider>
    </AuthLayout>
  );
}

export async function getServerSideProps({ req, query }) {
  const socials = Object.values(await getProviders());

  const session = await getSession({ req });
  const { callbackUrl } = query;
  if (session)
    return {
      redirect: {
        destination: callbackUrl,
      },
    };

  const csrfToken = await getCsrfToken({ req });

  return {
    props: {
      socials,
      callbackUrl,
      csrfToken,
    },
  };
}

export default Signin;
