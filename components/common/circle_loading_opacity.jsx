// mui
import { CircularProgress } from "@material-ui/core";

const CircleLoadingOpacity = () => {
    return (
        <div className="fixed top-0 left-0 bottom-0 right-0 justify-center items-center flex bg-black opacity-80" style={{ zIndex: 1000 }}>
            <CircularProgress size={100} style={{ color: "#FF6035" }} />
        </div>
    )
}

export default CircleLoadingOpacity;