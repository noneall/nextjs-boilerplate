// add to use fontawesome icons
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import '../styles/globals.css'

import { CacheProvider, EmotionCache } from '@emotion/react'
import { ErrorBoundary } from 'react-error-boundary'
import { NextPage } from 'next'
import { useLocalStorage } from 'react-hooks'
import CssBaseline from '@mui/material/CssBaseline'
import React, { useEffect, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'

import { createEmotionCache } from 'utils/createEmotionCache'
import theme from 'theme'

import ErrorFallback from 'components/Error/ErrorFallback'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout<NextPage>
    emotionCache: EmotionCache
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page)

    const [themeMode] = useLocalStorage<'light' | 'dark'>('theme-mode', 'light')

    const Theme = useMemo(() => theme(themeMode), [themeMode])

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement?.removeChild?.(jssStyles)
        }
    }, [])

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={Theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {
                        // reset the state of your app so the error doesn't happen again
                    }}>
                    {getLayout(<Component {...pageProps} />)}
                </ErrorBoundary>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MyApp
