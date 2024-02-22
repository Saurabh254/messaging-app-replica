import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginScreen = () => {
    const [phone, setPhone] = useState('');
    const [otpButton, setOtpButton] = useState('Get OTP');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center flex-col w-full h-full">
            <div className="flex flex-col bg-red-200 p-6 gap-4 rounded-md shadow-sm">
                <span className="my-2 mx-1">Enter your phone number</span>
                <input placeholder="Phone number" className="p-2 rounded-lg  border-2 border-gray-200" value={phone} onChange={e => setPhone(e.target.value)} />
                <div className="flex  flex-col justify-between mx-4 items-center">
                    <div className="w-full flex items-center">
                        <span className="my-4 mx-2">Enter OTP:</span>
                        <input placeholder="OTP" minLength={4} maxLength={4} value={otp} onChange={(event) => setOtp(event.target.value)} className="w-[6rem] flex items-center justify-center text-center rounded-lg border-2 border-grey-200 py-2 px-4  h-[2em]" />
                    </div>
                    <button type="submit" className=" w-full  h-[2em] rounded-lg bg-white cursor-pointer border-2 border-grey-200 hover:bg-gray-400" onClick={
                        () => {
                            if (otpButton == 'Get OTP') {
                                fetch(`http://192.168.28.250:8000/public/sms?phoneNumber=${phone}`,
                                    { method: "POST" }).then(e => { if (e.status == 200) { return } }); setOtpButton('Verify')
                            } else if (otpButton == 'Verify') {
                                let res = fetch(`http://192.168.28.250:8000/public/verify?phoneNumber=${phone}&otp=${otp}`, { method: "POST" });
                                res.then(data => data.json()).then(val => {
                                    if (val.status == 'verified') { setOtpButton('Verified') } else if (val.status == 'not verified') {
                                        console.log('Incorrect OTP'); setOtpButton('Get OTP'); return;
                                    } console.log(val.status);
                                    navigate('/', { replace: false });
                                    setOtpButton('Get OTP')
                                    setOtp('')
                                    setPhone('')
                                })
                            } else {
                                console.log("Already verfied");
                            }
                        }

                    }>{otpButton}</button>
                </div>
            </div>
        </div >
    )
}

export default LoginScreen;