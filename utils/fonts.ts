import { Roboto, Inter, Berkshire_Swash, Pangolin } from '@next/font/google';

export const roboto = Roboto({
    // Specifying weight is only required for
    // non-variable fonts.
    weight: ['400', '100', '300', '900'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    style: ['italic', 'normal']
});

export const inter = Inter({
    // Specifying weight is only required for
    // non-variable fonts.
    weight: ['400', '100', '300', '900'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    style: ['normal']
});

export const berkshire = Berkshire_Swash({
    // Specifying weight is only required for
    // non-variable fonts.
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    style: ['normal']
});

export const pangolin = Pangolin({
    // Specifying weight is only required for
    // non-variable fonts.
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    style: ['normal']
})