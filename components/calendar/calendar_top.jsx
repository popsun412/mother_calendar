import styles from '../../styles/calendar/Calendar.module.css';
import Image from 'next/image';

export default function CalendarTop() {
    return (
        <div className="flex px-4 pt-10 pb-3 space-x-4 border-b" style={{ color: "#e0e0e0" }}>
            <span className="rounded-full w-9 h-9 bg-green-500 mr-3" style={{ color: "red", borderWidth: "5px" }}>
                <Image src="/images/ellipse1.png" width={36} height={36} />
            </span>
            <span className="rounded-full w-9 h-9 bg-green-500"></span>
            <button className={styles.add}>+</button>
        </div >
    )

}
