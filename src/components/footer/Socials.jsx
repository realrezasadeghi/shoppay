import {SiInstagram, SiTelegram, SiLinkedin, SiYoutube, SiTwitter} from "react-icons/si";
import Link from "next/link";

function Socials() {
    const SOCIALS_ITEMS = [
        {
            id: 1,
            href: '/instagram',
            icon: <SiInstagram/>
        },
        {
            id: 2,
            href: '/telegram',
            icon: <SiTelegram/>
        },
        {
            id: 3,
            href: '/linkedin',
            icon: <SiLinkedin/>
        },
        {
            id: 4,
            href: '/youtube',
            icon: <SiYoutube/>
        },
        {
            id: 5,
            href: '/twitter',
            icon: <SiTwitter/>
        }
    ]
    return (
        <ul className={'flex items-center gap-4'}>
            {SOCIALS_ITEMS.map((social => (
                <li key={social.id}>
                    <Link target={'_blank'} href={social.href} className={'text-3xl text-white hover:text-slate-500'}>
                        {social.icon}
                    </Link>
                </li>
            )))}
        </ul>
    )
}

export default Socials;
