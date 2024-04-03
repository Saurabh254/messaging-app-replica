import { colors } from "../../../colors";



const DevicesComponent = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full py-4 flex items-center px-6 border-b-2 rounded-lg" style={{ backgroundColor: colors.secondary }}>
                <div className="w-1/3 h-full overflow-hidden p-4 flex flex-col gap-4 items-center">
                    <img className="w-full rounded-lg" src="https://img.etimg.com/thumb/msid-98897778,width-1080,height-1080,imgsize-35708,resizemode-75/6-latest-mobile-phones-with-12gb-ram-in-india.jpg" alt="" />

                </div>
                <div className="w-2/3  px-8 h-full flex flex-col items-center gap-8">
                    <span className="text-white
                    font-semibold">Redmi Note 15 Pro Max</span>
                    <div className=" text-white flex flex-col items-center p-8 border-2 rounded-sm">
                        <span className="w-full text-center text-lg mb-6">Device Information</span>

                        <table className=" [&>tr>td]:px-12 [&>tr>td]:py-0 [&>tr] ">
                            <tr>
                                <td>IP:</td>
                                <td>127.0.0.1</td>
                            </tr>
                            <tr>
                                <td>Client:</td>
                                <td>Messager Pro</td>
                            </tr>
                            <tr>
                                <td>Recent Activity: </td>
                                <td>10:20 AM Mar 17</td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td>Indore, India</td>
                            </tr>
                            <tr>
                                <td>Registed at:</td>
                                <td>10:18 AM Mar 17</td>
                            </tr>
                            <tr>
                                <td>Status:</td>
                                <td className="text-green-200">Active</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DevicesComponent;