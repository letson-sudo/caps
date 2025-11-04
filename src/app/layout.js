// import { Nunito } from 'next/font/google'
// import '@/app/global.css'

// const nunitoFont = Nunito({
//     subsets: ['latin'],
//     display: 'swap',
// })

// const RootLayout = ({ children }) => {
//     return (
//         <html lang="en" className={nunitoFont.className}>
//             <body className="antialiased">{children}</body>
//         </html>
//     )
// }

// export const metadata = {
//     title: 'CAPS - Centre Against Poverty and Social Problems',
//     description: 'Empowering communities, transforming lives since 1999',
//     icons: {
//         icon: '/caps-logo.ico',
//     },
// }

// export default RootLayout





import { Nunito } from 'next/font/google'
import '@/app/global.css'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <head>
                {/* Add Google verification meta tag */}
                <meta
                    name="google-site-verification"
                    content="EkHHajOOwHDl9LUj0Ofoic11cuVnrlQXeOhSojfKVUg"
                />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'CAPS - Centre Against Poverty and Social Problems',
    description: 'Empowering communities, transforming lives since 1999',
    icons: {
        icon: '/caps-logo.ico',
    },
}

export default RootLayout
