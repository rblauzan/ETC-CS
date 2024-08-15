import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['es','pol','en'],
    
    //If this locale is matched
    defaultLocale: 'es'
});

export const config = {
//
    matcher:['/((?!api|_next|.*\\..*).*)']
};
