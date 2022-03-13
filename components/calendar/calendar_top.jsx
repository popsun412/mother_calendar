import Image from 'next/image';

export default function CalendarTop() {
    return (
        <div className="flex px-4 pt-10 pb-3 space-x-4 border-b" style={{ color: "#e0e0e0" }}>
            <span className="rounded-full w-9 h-9" style={{ borderColor: "red", borderWidth: "5px" }}>
                <Image src="/images/ellipse1.png" width={36} height={36} />
            </span>
            <span className="rounded-full w-9 h-9">
                <Image src="/images/ellipse1.png" width={36} height={36} />
            </span>
            <button className="rounded-full w-9 h-9 border-dashed border-gary3 border">+</button>
        </div >
    )

}
