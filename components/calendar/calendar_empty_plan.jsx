import Image from "next/image";

export default function EmptyPlan() {
    return (
        <div className="flex w-full h-full items-center justify-center bg-white">
            <Image src="/images/ellipse1.png" width={36} height={36} />
            <Image src="/images/ellipse1.png" width={36} height={36} />
        </div>
    )
}