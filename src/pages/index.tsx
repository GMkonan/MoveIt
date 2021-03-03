import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router';
import styles from '../styles/pages/Login.module.css';
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function Login() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/home');
    }
  }, [session, router]);
  return (
    <div className={styles.container}>

      <div className={styles.loginPanel}>
        <img src="/logo-full-white.svg" />

        
          <h1>Bem-vindo(a)</h1>
          <button 
          onClick={() => signIn('github', { callbackUrl: `${process.env.NEXTAUTH_URL}/home` })}
          >Fazer login com Github <FaGithub style={{marginLeft: "10px"}} size={40}/></button>
          <button 
          onClick={() => signIn('google', { callbackUrl: `${process.env.NEXTAUTH_URL}/home` })}
          >Fazer login com Google <FaGoogle style={{marginLeft: "10px"}} size={40}/></button>
        
      </div>
    </div>
  )
}