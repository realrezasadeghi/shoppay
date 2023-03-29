import Link from "next/link";

function Links({title, items = []}) {
    return (
        <div className={'w-full'}>
            <h3 className={'text-white font-bold uppercase'}>{title}</h3>
            <ul className={'mt-2'}>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            className={'text-zinc-400 text-xs transition hover:text-amber-400'}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Links;
