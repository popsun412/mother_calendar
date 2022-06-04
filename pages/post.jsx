import { useRouter } from "next/router";
import DaumPostcode from 'react-daum-postcode';

export default function Post() {
    const router = useRouter();

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
    }

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0">
            <DaumPostcode
                onComplete={handleComplete}
                autoClose={false}
                style={{ height: '100%' }}
            />
        </div>
    );
}