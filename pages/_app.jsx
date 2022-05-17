import '../styles/globals.css'
import '../styles/toggle_switch.css'
import { initializeApp } from "firebase/app";
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  const firebaseConfig = {
    apiKey: "AIzaSyC6HvJE6TtAoYrxo3wRdnX4VUmD1nUIs74",
    authDomain: "mother-s-calendar.firebaseapp.com",
    projectId: "mother-s-calendar",
    storageBucket: "mother-s-calendar.appspot.com",
    messagingSenderId: "463886716448",
    appId: "1:463886716448:web:57b6c3b3c960fc2c083645"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  initializeApp(firebaseConfig);

  return <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
}

export default MyApp
