/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { useState } from "react";

export default function CommunityAddBtn() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open ? (
        <div className="fixed flex justify-end pr-4 max-w-500 bottom-20 z-100">
          <img src="/images/ic_float.png" style={{ width: 72, height: 72 }} onClick={() => setOpen(true)} />
        </div>
      ) : (
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/60 z-150">
          <div className="absolute flex flex-col items-end space-y-4 text-white" style={{ bottom: 84, right: 22 }}>
            <div className="flex items-center space-x-2 mr-2.5" onClick={() => router.push("/community/freeopen")}>
              <p>무료모임</p>
              <div className="bg-white rounded-full p-2 w-10 flex justify-center items-center">
                <img src="/images/category1.png" alt="" />
              </div>
            </div>
            <div className="flex items-center space-x-2 mr-2.5" onClick={() => router.push("/community/payopen")}>
              <p>유료모임</p>
              <div className="bg-white rounded-full p-2 w-10 flex justify-center items-center">
                <img src="/images/category3.png" alt="" />
              </div>
            </div>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <img src="/images/close.png" className="w-24" onClick={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
