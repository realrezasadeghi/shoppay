import React from "react";
import Links from "@/components/footer/Links";
import Socials from "@/components/footer/Socials";
import Image from "next/image";

function Footer() {
    const items = [{
        id: 1, href: '', label: 'About Us'
    }, {
        id: 2, href: '', label: 'Contact'
    }, {
        id: 3, href: '', label: 'Social Responsibility'
    }, {
        id: 4, href: '', label: 'Take our feedback survey'
    }]
    return (<footer className={'w-full bg-zinc-100'}>
        <button className={'w-full h-10 bg-slate-900 text-white transition hover:opacity-80'}>
            Back To Top
        </button>
        <div className="w-full h-full bg-slate-800">
            <div className="container mx-auto">
                <div className="grid p-2 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <Links title={'Pages'} items={items}/>
                    <Links title={'Help & Support'} items={items}/>
                    <Links title={'Customer Service'} items={items}/>
                    <div className="w-full flex flex-col gap-2">
                        <Image src={'/images/logo.png'} alt={'Shop Pay Logo'} width={150} height={50}/>
                        <form className={'w-full'}>
                            <input className={'rounded-sm w-full p-2 text-sm'} placeholder={'Enter Your Email'}/>
                            <button className={'text-white bg-amber-500 p-2 my-2 rounded-sm w-full'}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <Socials/>
                    <span className={'text-zinc-400 text-xs text-center'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;
