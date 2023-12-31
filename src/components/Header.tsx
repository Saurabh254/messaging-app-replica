import { FC } from 'react';
const logo = '/src/assets/whatsapp.png';

type Props = { status: boolean };

const Header: FC<Props> = ({ status }: Props) => {
    return (
        <div className="heading">
            <img src={logo} alt='logo' className='logo' />
            <span className="title">Messages Desktop</span>
            {<div className="loginSignupbtns">
                {status ?
                    <><button>SWITCH ACCOUNT</button>
                        <button>LOGOUT</button>
                    </> :
                    <><button>Login</button>
                        <button>SignUp</button>
                    </>}
            </div>}
        </div>
    );
}

export default Header;