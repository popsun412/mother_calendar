import '../styles/globals.css'
import '../styles/toggle_switch.css'
import { initializeApp } from "firebase/app";
import { RecoilRoot } from 'recoil'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const firebaseConfig = {
    apiKey: "AIzaSyBJkSWeipxN-pfSYc7zc-xHi87XZvN6LKo",
    authDomain: "mamadadacal-a1df8.firebaseapp.com",
    projectId: "mamadadacal-a1df8",
    storageBucket: "mamadadacal-a1df8.appspot.com",
    messagingSenderId: "229114284434",
    appId: "1:229114284434:web:72f1e5ea4485e6e94a194b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  initializeApp(firebaseConfig);

  return <RecoilRoot>
    <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
    <Component {...pageProps} />
  </RecoilRoot>
}

export default MyApp
