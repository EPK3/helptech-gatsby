import HomeHeroDesktop from './images/HomeHeroDesktop.png'
import HomeHeroMobile from './images/HomeHeroMobile.png'
import logoImg from './images/logo.png'

export function ButtonFunction() {
    return {
        isLink: true, 
        bgColor: 'bg-orange', 
        textColor: 'text-white',
        fontSize: 'text-xl', 
        fontWeight: 'font-bold', 
        label: 'Schedule Service Now',
        href: `tel:test`,
    }
}

export function HomeHeroFunction() {
    return {
        bgImage: `${HomeHeroDesktop}`, 
        bgImageMobile: `${HomeHeroMobile}`, 
        title: 'Restoring Devices. Renewing Possibilities.', 
        subtitle: 'Expert Repair Services for PCs, Laptops, and Mobile Devices in Bucks County.', 
        buttonProps: {
            isLink: true, 
            bgColor: 'bg-orange', 
            textColor: 'text-white',
            fontSize: 'text-[1.375rem] sm:text-[2.112rem] md:text-[2.97rem] lg:text-base xxl:text-[1.375rem] xxxl:text-[1.83331rem]', 
            fontWeight: 'font-bold', 
            label: 'Schedule Service Now',
            href: `tel:test`,
        }, 
        titleColor: 'text-blue',
    }
}

export function HeaderFunction() {
    const menu = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Services',
            href: '/',
        },
        {
            label: 'Lorem Ipsum',
            href: '/',
        },
        {
            label: 'Lorem Ipsum',
            href: '/',
        },
        {
            label: 'Lorem Ipsum',
            href: '/',
        }
    ]
    return {
        logo: {
            src: logoImg,
            srcSet: logoImg,
        },
        logoAltText: '', 
        menuData: menu, 
        requestButtonProps: {
            isLink: true, 
            bgColor: 'bg-blue', 
            textColor: 'text-white',
            fontSize: 'text-[0.84375rem] xxl:text-[1.125rem] xxxl:text-[1.5rem] !py-[.8rem] px-16', 
            fontWeight: 'font-bold', 
            label: 'Request Service',
            href: `tel:test`,
        }, 
        callButtonProps: {
            isLink: true, 
            bgColor: 'bg-orange', 
            textColor: 'text-white',
            fontSize: 'text-[0.84375rem] xxl:text-[1.125rem] xxxl:text-[1.5rem] !py-[.8rem] px-16', 
            fontWeight: 'font-bold', 
            label: 'Call Us Now',
            href: `tel:test`,
        }, 
        textColor: 'text-blue', 
        borderColor: 'border-orange',
    }
}