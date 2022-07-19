import "../styles/globals.css";
import "../styles/toggle_switch.css";
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    const firebaseConfig = {
        apiKey: "AIzaSyBJkSWeipxN-pfSYc7zc-xHi87XZvN6LKo",
        authDomain: "mamadadacal-a1df8.firebaseapp.com",
        projectId: "mamadadacal-a1df8",
        storageBucket: "mamadadacal-a1df8.appspot.com",
        messagingSenderId: "229114284434",
        appId: "1:229114284434:web:72f1e5ea4485e6e94a194b",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    initializeApp(firebaseConfig);

    return (
        <>
            <Head>
                <title>엄마의 캘린더</title>
                <meta property="og:title" content="엄마의 캘린더" key="og:title" />
                <meta property="og:url" content="https://mamadadacal.com" key="og:url" />
                <meta property="description" content="3-7세 유아의 엄마아빠를 위한 육아동기방" key="description" />
                <meta property="og:description" content="3-7세 유아의 엄마아빠를 위한 육아동기방" key="og:description" />
                <meta property="og:image" content="/mamadadacal_600.png" key="og:image" />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <RecoilRoot>
                <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
                <Script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=3f293e31b6153fe616c00eebd598f472&autoload=false&libraries=services,clusterer" />
                <Component {...pageProps} />
            </RecoilRoot>
        </>
    );
}

export default MyApp;
