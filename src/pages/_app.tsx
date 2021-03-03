import { Provider } from 'next-auth/client';
import '../styles/global.css';

//botamos o contexto por volta de todo o app pq oq estiver por volta do contexto vai receber o contexto, ou seja 
// tudo no app esta recebendo um contexto igual entao todos podem se comunicar
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
