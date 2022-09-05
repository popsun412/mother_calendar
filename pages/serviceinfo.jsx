/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function ServiceInfo() {
  return (
    <div className="w-full h-screen overflow-y-auto scrollbar-hide">
      <div className="fixed max-w-500 bg-white top-0 flex items-center w-full px-4" style={{ height: 50 }}>
        <img
          src="/images/ic_back.png"
          className="w-10 relative -left-4"
          onClick={() => {
            window.history.back();
          }}
        />
        <span className="mx-12 absolute left-0 right-0 text-center text-base font-medium">서비스 소개</span>
      </div>
      <img className="w-full" src="/images/guide/serviceinfo.png" alt="서비스 소개" style={{ marginTop: 50 }} />
    </div>
  );
}
