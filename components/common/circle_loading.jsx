// mui
import { CircularProgress } from "@material-ui/core";

const CircleLoading = () => {
    return (
        <div className="w-full h-full bg-transparent justify-center items-center flex"><CircularProgress size={100} style={{ color: "#FF6035" }} /></div>
    )
}

export default CircleLoading;