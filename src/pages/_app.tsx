import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext';

//botamos o contexto por volta de todo o app pq oq estiver por volta do contexto vai receber o contexto, ou seja 
// tudo no app esta recebendo um contexto igual entao todos podem se comunicar
function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp
