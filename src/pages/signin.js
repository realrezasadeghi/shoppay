import Link from "next/link";
import Button from "@/components/button";
import TextField from "@/components/textField";
import {MdKeyboardBackspace} from "react-icons/md";
import {FormProvider, useForm} from 'react-hook-form'
import {getProviders} from "next-auth/react";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";

const defaultValues = {
    email: 'ehsan@gmail.com',
    password: '12345678'
}

const resolver = yup.object().shape({
    email: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required').min(8, 'Password min 8 char')
})

function Signin({socials}) {
    const methods = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(resolver)
    })

    const onSubmit = (data) => {
    }

    return (
        <div className={'w-full'}>
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col gap-4 p-4">
                        <div className="flex items-center gap-4">
                            <div className="flex justify-center items-center rounded-full border w-10 h-10">
                                <MdKeyboardBackspace size={20}/>
                            </div>
                            <span>We be happy to join us ?</span>
                            <Link href={'/'} className={'underline text-blue-500'}>
                                <strong>Go Store</strong>
                            </Link>
                        </div>
                        <h1 className={'text-5xl'}>Sign In</h1>
                        <p className={'text-sm text-gray-400'}>
                            Get access to one of the best Eshopping services in the world
                        </p>
                        <FormProvider {...methods}>
                            <form className={'w-full flex flex-col gap-4'} onSubmit={methods.handleSubmit(onSubmit)}>
                                <TextField.Form name={'email'} label={'E-mail'} type={'email'}/>
                                <TextField.Form name={'password'} label={'Password'} type={'password'}/>
                                <Link href={'/forget-password'} className={'text-sm text-gray-400 hover:text-gray-700'}>
                                    Forget password ?
                                </Link>
                                <Button label={'Submit'} type={'submit'}/>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const socials = Object.values(await getProviders())

    return {
        props: {
            socials
        }
    }
}

export default Signin;
