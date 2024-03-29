import moment from "moment";
import "moment-duration-format";

export function calcPercent(plan) {
    if (plan.repeatDay == null || plan.repeatDay.length == 0) return 1;
    if (plan.startDate == null || plan.endDate == null) return 1;

    const _startDate = moment(plan.startDate);
    const _endDate = moment(plan.endDate);
    const _days = _endDate.diff(_startDate, "days");

    let count = 0;
    for (let index = 0; index <= _days; index++) {
        const _tempDate = moment(_startDate.format("YYYY-MM-DD")).add(index, "d");
        if (plan.repeatDay.findIndex((_repeat) => _repeat == parseInt(_tempDate.format("d"))) >= 0) count++;
    }

    return count;
}

export function weekDayFormat(_day) {
    if (_day == 0) return "일";
    if (_day == 1) return "월";
    if (_day == 2) return "화";
    if (_day == 3) return "수";
    if (_day == 4) return "목";
    if (_day == 5) return "금";
    if (_day == 6) return "토";
}

export function profileImageCheck(_user, uploadImage = null) {
    if (uploadImage != null && uploadImage.preview_URL && uploadImage.preview_URL != "") return uploadImage.preview_URL;

    // if (!_user.isShare) return '/images/profile_lock.png';

    if ((_user?.profileImage ?? null) == null) {
        return _user.sex == "female" ? "/images/img_profile_mom.png" : "/images/img_profile_dad.png";
    }

    return _user.profileImage;
}

export function validateEmail(_email) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return _email.match(regexEmail);
}

export function getSubjectImage(_subject) {
    if (_subject == "국어") return "/images/category1.png";
    if (_subject == "영어") return "/images/category2.png";
    if (_subject == "수학") return "/images/category3.png";
    if (_subject == "과학") return "/images/category4.png";
    if (_subject == "사회") return "/images/category5.png";
    if (_subject == "미술") return "/images/category6.png";
    if (_subject == "음악") return "/images/category7.png";
    if (_subject == "체육") return "/images/category8.png";
    if (_subject == "생활") return "/images/category9.png";
    if (_subject == "체험") return "/images/category10.png";
    if (_subject == "체험") return "/images/category10.png";
    if (_subject == "기타") return "/images/category11.png";
    if (_subject == "부모") return "/images/category12.png";
}

export function getLocktypeImage(lockerType, subject) {
    if (lockerType == "책장") return "/images/locker/locker1.png";
    if (lockerType == "교구장") return "/images/locker/locker2.png";
    if (lockerType == "학원") return "/images/locker/locker3.png";
    if (lockerType == "체험") return "/images/locker/locker4.png";
    if (subject == "부모") return "/images/category12.png";
}

export function calcTime(authDt) {
    const authDate = moment(authDt);
    const seconds = moment().unix() - authDate.unix();
    const duration = moment.duration(seconds, "seconds");

    let formatted = "";
    if (seconds < 60) formatted = `${seconds}초 전`;
    if (60 <= seconds && seconds < 60 * 60) formatted = `${duration.format("m")}분 전`;
    if (60 * 60 <= seconds && seconds < 60 * 60 * 24) formatted = `${duration.format("H")}시간 전`;
    if (60 * 60 * 24 <= seconds) formatted = `${duration.format("D")}일 전`;

    return formatted;
}

export function runtypeColor(subject) {
    if (subject == "체험") return "#1d4cc7";
    if (subject == "국어") return "#f4d100";
    if (subject == "영어") return "#ff9d00";
    if (subject == "수학") return "#37cc53";
    if (subject == "과학") return "#219653";
    if (subject == "사회") return "#ff734d";
    if (subject == "미술") return "#ff84bf";
    if (subject == "음악") return "#c458ed";
    if (subject == "체육") return "#7EBCF9";
    if (subject == "놀이") return "#23a3f9";
    if (subject == "기타") return "#333333";
    if (subject == "부모") return "#866205";

    return "#828282";
}
