import { urlFor } from "../server/client";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const PortableTextComponents: Partial<any> = {
    types: {
        image: ({ value }: { value: any }) => {
            return <LazyLoadImage
                effect="blur"
                className={`w-full min-h-[500px] max-h-[700px] object-cover my-2`}
                src={urlFor(value).url()}
                alt={value.asset._ref || "news photos"} />
        },
    },
    marks: {
        link: ({ children, value }: { children: any, value: any }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a className="text-main" href={value.href} rel={rel}>
                    {children}
                </a>
            )
        },
    },
    listItem: {
        bullet: ({ children }: { children: string[] }) => <li>{children.join('')}</li >,
        number: ({ children }: { children: string[] }) => <li>{children.join('')}</li >,
        checkmarks: ({ children }: { children: string[] }) => <li>{children.join('')}</li>
    }
}