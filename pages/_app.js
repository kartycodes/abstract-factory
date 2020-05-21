import styles from './global.css'

export default function AbstractFactory({Component, pageProps}){
    return <Component {...pageProps}/>
}