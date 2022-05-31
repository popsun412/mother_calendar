import Login from '../components/login/login';
import { getAuth } from "firebase/auth";
import network from '../util/network';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CircleLoading from "../components/common/circle_loading";

export default function Home() {
  // 로그인 확인
  const [load, setLoad] = useState(false);

  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged(async (_user) => {
      if (_user) {
        router.push('/calendar');
      } else {
        setLoad(true);
      }
    });
  })

  return (load) ?
    <Login />
    : <div className="h-screen w-screen">
      <CircleLoading />
    </div>
}
