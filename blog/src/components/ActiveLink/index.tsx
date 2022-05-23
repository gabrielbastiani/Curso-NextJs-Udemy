import { ReactElement, cloneElement } from "react";
import { useRouter } from "next/router";
import Link, {LinkProps} from "next/link";

interface ActiveLonkProps extends LinkProps{
    children: ReactElement;
    activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...rest}: ActiveLonkProps){
    const {asPath} = useRouter();

    const className = asPath === rest.href ? activeClassName : '';

    return(
        <Link {...rest}>
            {cloneElement(children, {
                className
            })}
        </Link>
    )
}