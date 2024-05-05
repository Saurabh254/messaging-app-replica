import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../colors";

const LoginScreen = () => {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [verificationState, setVerificationState] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem('access_token')
            const token = localStorage.getItem('access_token')
            if (token == null) {
                navigate('/login')
            }

        }, 100000)
    })
    return (
        <div className="flex flex-col items-center justify-center h-[100svh] w-[100svw]">
            <div className=" p-24 rounded-xl shadow-xl flex flex-col gap-16" style={{ backgroundColor: colors.secondary }}>

                <div className="flex items-center w-full justify-center">

                    <span className="text-3xl text-white font-bold">Messenger Desktop</span>
                </div>
                {verificationState == 0 ?
                    <div className="flex flex-col gap-4 text-white font-bold">
                        <span className="text-xl">Phone Number:</span>
                        <input type="text" name="" id="" value={phoneNumber} onInput={(e) => { setPhoneNumber(e.target.value) }} className="text-2xl text-black py-3 px-4 font-normal rounded-lg shadow-lg" />
                        <span className="ml-auto cursor-pointer">need help?</span>
                    </div> : <div className="flex flex-col gap-4 text-white font-bold items-center">
                        <span className="text-xl">Enter the OTP:</span>
                        <input type="text" name="" id="" value={otp} onInput={(e) => { setOTP(e.target.value) }} className="text-2xl text-black py-3 px-4 font-normal rounded-lg shadow-lg tracking-wide w-[75%]" maxLength={6} minLength={6} />
                        <span className="ml-auto cursor-pointer mr-12">need help?</span></div>
                }
                <div className="w-full flex">
                    <input type="button" value={verificationState == 0 ? "Send OTP" : "Verify"} onClick={async function () {
                        if (verificationState == 0) {
                            const response = await fetch('http://127.0.0.1:8000/ha', { method: "POST", })
                            if (response.status != 200) { return }
                            const response_data = await response.json()
                            console.log(response_data)
                            setVerificationState(1)
                        } else {
                            const response = await fetch('http://127.0.0.1:8000/ha', { method: "POST", })
                            if (response.status != 200) { return }
                            const response_data = await response.json()
                            console.log(response_data)
                            localStorage.setItem('access_token', "some_secret_token")
                            navigate('/')

                        }
                    }
                    } className="bg-white p-4 rounded-lg shadow-lg ml-auto mr-4 disabled:bg-slate-400 hover:cursor-pointer disabled:hover:scale-100 disabled:text-slate-600
                    hover:scale-105" disabled={phoneNumber.length == 10 ? false : true} />
                </div>
            </div>

        </div>
    )
}

export default LoginScreen;