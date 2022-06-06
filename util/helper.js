import moment from "moment";

export function calcPercent(plan) {
    if (plan.repeatDay == null || plan.repeatDay.length == 0) return 1;
    if (plan.startDate == null || plan.endDate == null) return 1;

    const _startDate = moment(plan.startDate);
    const _endDate = moment(plan.endDate);
    const _days = _endDate.diff(_startDate, 'days');

    let count = 0;
    for (let index = 0; index <= _days; index++) {
        const _tempDate = _startDate.add(index, "d");
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

    if (_user.profileImage == null) {
        return (_user.sex == 'female') ? '/images/img_profile_mom.png' : '/images/img_profile_dad.png';
    }

    return _user.profileImage;
};

export function validateEmail(_email) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return _email.match(regexEmail);
}

export function getSubjectImage(_subject) {
    if (_subject == "국어") return '/images/category1.png';
    if (_subject == "영어") return '/images/category2.png';
    if (_subject == "수학") return '/images/category3.png';
    if (_subject == "과학") return '/images/category4.png';
    if (_subject == "사회") return '/images/category5.png';
    if (_subject == "미술") return '/images/category6.png';
    if (_subject == "음악") return '/images/category7.png';
    if (_subject == "체육") return '/images/category8.png';
    if (_subject == "놀이") return '/images/category9.png';
    if (_subject == "체험") return '/images/category10.png';
    if (_subject == "체험") return '/images/category10.png';
    if (_subject == "기타") return '/images/category11.png';
    if (_subject == "부모") return '/images/category12.png';
}

export function getLocktypeImage(lockerType) {
    if (lockerType == "책장") return '/images/locker/locker1.png';
    if (lockerType == "교구함") return '/images/locker/locker2.png';
    if (lockerType == "학원지도") return '/images/locker/locker3.png';
    if (lockerType == "체험지도") return '/images/locker/locker4.png';
}