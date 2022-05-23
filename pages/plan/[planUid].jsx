import { useRouter } from "next/router"
import PlaneDetail from "../../components/plan/plan_detail";

export default function Plan() {
    const router = useRouter();
    console.log(router.query);

    return (
        <div className="">
            <PlaneDetail />
        </div>
    )
}