/// <reference types="react" />

declare type NextPageWithLayout<P = {}, IP = P> = import('next').NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}
