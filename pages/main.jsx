import MainBanner from "../components/main/main_banner";
import MainSubject from "../components/main/main_subject";
import MainItme from "../components/main/main_item";
import MainTop from "../components/main/main_top";
import MianPlace from "../components/main/mian_place";
import MainCategory from "../components/main/main_category";
import MainThem from "../components/main/main_ theme";

export default function Main() {
    return (
        <div className="w-screen h-screen overflow-y-auto scrollbar-hide">
            {/* <MainTop />
            <MainBanner />
            <MainSubject />
            <MainItme />
            <MianPlace />
            <MainThem /> */}

            <MainCategory />

        </div>
    )
}