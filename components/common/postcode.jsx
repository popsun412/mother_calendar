import DaumPostcode from 'react-daum-postcode';

export default function PostCode(props) {
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

        props.setSignupInfo({ ...props.signupInfo, address: fullAddress });
        props.setPostOpen(false);
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 p-4 bg-black bg-opacity-60">
            <DaumPostcode
                onComplete={handleComplete}
                style={{ height: '100%' }}
            />
        </div>
    );
} 