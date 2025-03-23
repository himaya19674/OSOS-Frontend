import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faTimes, faCheck, faInfoCircle, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import back from '../assets/sweets.jpg';

const USER_REG = /^[a-zA-Z0-9-_]{4,24}$/;
const PWD_REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/;
const MOB_REG = /^0[0-9]{9}$/;
const NAME_REG = /^[a-zA-Z ]{4,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [fullName, setFullName] = useState('');
    const [validFullName, setValidFullName] = useState(false);
    const [fullNameFocus, setFullNameFocus] = useState(false);

    const [mobile, setMobile] = useState('');
    const [validMobile, setValidMobile] = useState(false);
    const [mobileFocus, setMobileFocus] = useState(false);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [role, setRole] = useState('Buyer');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = NAME_REG.test(fullName);
        setValidFullName(result);
    }, [fullName]);

    useEffect(() => {
        const result = USER_REG.test(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = MOB_REG.test(mobile);
        setValidMobile(result);
    }, [mobile]);

    useEffect(() => {
        const result = PWD_REG.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validName || !validFullName || !validMobile || !validPwd || !validMatch) {
            setErrMsg('Please fill out the form correctly.');
            return;
        }
        // Handle successful form submission (e.g., API call)
        console.log({ user, fullName, mobile, pwd, role });
    };

    return (
        <div
            className='h-screen flex justify-center items-center bg-cover  '
            style={{ backgroundImage: `url(${back})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

            <div className='w-[30%] h-auto rounded-3xl backdrop-blur-2xl shadow-2xl py-6 '>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                <h1 className='flex gap-4 justify-center items-center text-2xl font-bold text-white'>
                    <FontAwesomeIcon icon={faIdCard} />
                    Register
                </h1>

                <form className='m-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-8 my-8 text-white'>
                        <input
                            className="w-[90%] border-b-2  bg-transparent focus:outline-none focus:border-b-black "
                            type='text'
                            id='fullName'
                            placeholder='Full Name'
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            required
                            aria-invalid={validFullName ? 'false' : 'true'}
                            aria-describedby='namenote'
                            onFocus={() => setFullNameFocus(true)}
                            onBlur={() => setFullNameFocus(false)}
                        />
                        <p id="namenote" className={`${fullNameFocus && fullName && !validFullName ? 'text-white bg-slate-600 rounded-md w-[90%] p-2 mt-1 text-sm' : 'hidden'}`}>
                            <FontAwesomeIcon icon={faInfoCircle} /> Minimum 4 characters. Allow only letters.
                        </p>

                        <input
                            className="w-[90%] border-b-2  bg-transparent focus:outline-none focus:border-b-black"
                            type='text'
                            id='username'
                            placeholder='Username'
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? 'false' : 'true'}
                            aria-describedby='uidnote'
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={`${userFocus && user && !validName ? 'text-white bg-slate-600 rounded-md w-[90%] p-2 mt-1 text-sm' : 'hidden'}`}>
                            <FontAwesomeIcon icon={faInfoCircle} /> 4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <input
                            className="w-[90%] border-b-2  bg-transparent focus:outline-none focus:border-b-black"
                            type='text'
                            id='mobile'
                            placeholder='Mobile Number'
                            onChange={(e) => setMobile(e.target.value)}
                            value={mobile}
                            required
                            aria-invalid={validMobile ? 'false' : 'true'}
                            aria-describedby='mobnote'
                            onFocus={() => setMobileFocus(true)}
                            onBlur={() => setMobileFocus(false)}
                        />
                        <p id="mobnote" className={`${mobileFocus && mobile && !validMobile ? 'text-white bg-slate-600 rounded-md w-[90%] p-2 mt-1 text-sm' : 'hidden'}`}>
                            <FontAwesomeIcon icon={faInfoCircle} /> Start with 0. Must have 10 numbers.
                        </p>

                        <input
                            className="w-[90%] border-b-2  bg-transparent focus:outline-none focus:border-b-black"
                            type='password'
                            id='pwd'
                            placeholder='Password'
                            autoComplete='off'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? 'false' : 'true'}
                            aria-describedby='pwdnote'
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={`${pwdFocus && pwd && !validPwd ? 'text-white bg-slate-600 rounded-md w-[90%] p-2 mt-1 text-sm' : 'hidden'}`}>
                            <FontAwesomeIcon icon={faInfoCircle} /> 8 to 24 characters. Must include uppercase, lowercase, number, and special character.
                        </p>

                        <input
                            className="w-[90%] border-b-2  bg-transparent focus:outline-none focus:border-b-black"
                            type='password'
                            id='matchPwd'
                            placeholder='Re-Enter Password'
                            autoComplete='off'
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? 'false' : 'true'}
                            aria-describedby='matchPwdnote'
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="matchPwdnote" className={`${matchFocus && matchPwd && !validMatch ? 'text-white bg-slate-600 rounded-md w-[90%] p-2 mt-1 text-sm' : 'hidden'}`}>
                            <FontAwesomeIcon icon={faInfoCircle} /> Passwords must match.
                        </p>

                        
                            
                        
                    </div>

                    <button className='w-[50%] border border-white bg-transparent rounded-md flex justify-center p-2 mt-3 mb-2 mx-auto font-bold text-white'>
                        SIGN UP
                    </button>
                </form>
                <p className='mb-3 flex justify-center mx-auto text-gray-400'>
                    Already signed up? <span className='font-semibold pl-4 text-white'><Link to="/login">Login</Link></span>
                </p>
            </div>
        </div>
    );
}

export default Register;
