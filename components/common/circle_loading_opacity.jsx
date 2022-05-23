// mui
import { CircularProgress } from "@material-ui/core";

const CircleLoadingOpacity = () => {
    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 justify-center items-center flex bg-black opacity-80 z-50"><CircularProgress size={100} /></div>
    )
}

export default CircleLoadingOpacity;