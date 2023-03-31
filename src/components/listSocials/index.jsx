import Button from "@/components/button";
import {SiGithub} from "react-icons/si";


const ICONS_SOCIALS = {
    'github': <SiGithub/>
}

function ListSocials({socials = [], onClick}) {
    return (
        <div className={'flex flex-col gap-4'}>

            {
                socials.map((social) => (
                    <Button
                        key={social.id}
                        type={'button'}
                        color={'blue'}
                        roundedSize={'rounded-3xl'}
                        label={`Sign in ${social.name}`}
                        onClick={() => onClick(social.id)}
                        startIcon={ICONS_SOCIALS[social.id]}
                        classNameButton={'bg-white border hover:bg-gray-200'}
                    />
                ))
            }
        </div>
    )
}

export default ListSocials;
