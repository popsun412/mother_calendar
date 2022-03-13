import MainBanner from "../components/main/main_banner";
import MainCategory from "../components/main/main_category";
import MainItme from "../components/main/main_item";
import MainTop from "../components/main/main_top";

export default function Main() {
    return (
        <div>
            <MainTop />
            <MainBanner />
            <MainCategory />
            <MainItme />
        </div>
    )
}