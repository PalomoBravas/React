'use client'

import React, {useContext} from "react";
import layout from "@/app/layout.module.css";
import Image from "next/image";
import siteLogoUrl from "@/public/logo/HIDDEN COLOR.svg";
import header from "@/components/Header/header.module.css";
import Link from "next/link";
import davinciLogoUrl from "@/public/logo/DaVinci-Resolve-Logo-1.webp";
import {AppContext, AppContextProvider} from "@/context/app.context";

export default function Header () {
    return (
        <AppContextProvider url='https://www.blackmagicdesign.com/'>
            <header className={layout.header}>
                <Link href='/'>
                    <Image
                        src={siteLogoUrl}
                        alt='Logo of site'/>
                </Link>

                <nav className={header.nav}>
                    <LinkToDavinci/>
                </nav>
            </header>

        </AppContextProvider>

    )
}

const LinkToDavinci = () => {
    const {url} = useContext(AppContext);

    return (
        <Link href={url} target='_blank'>
            <Image
                className={header.nav__davinciLogo}
                src={davinciLogoUrl}
                width={40}
                height={40}
                alt='Logo of Davinci site'/>
        </Link>
    )
}
