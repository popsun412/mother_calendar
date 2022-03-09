import Image from 'next/image';
import { FormatListBulleted, BookmarkBorderOutlined } from "@material-ui/icons"

export default function CalendarMiddle() {
    return (
        <div className="px-5 mb-3.5">
            <div className="pt-4 mb-4">
                <span className="text-2xl font-semibold textGray1">세린맘</span>
                <span>5세, 서울, 엄마표</span>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-base textGray2 mr-2">2022년 2월 2주차</span>
                    <Image src="/images/Vector.png" width={5.5} height={11} alt={"화살표"} />
                </div>
                <div className="flex space-x-1">
                    <FormatListBulleted />
                    <BookmarkBorderOutlined />
                </div>
            </div>
        </div>
    );
}