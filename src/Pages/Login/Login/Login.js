import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import './Login.css'
import SocialLogIn from '../SocialLogin/SocialLogIn';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);


    }
    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('reset email sent')
        }
        else {
            toast('enter your email')
        }
    };
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from]);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    };
    return (
        <div className='container mx-auto w-50 mt-5 form-container'>
            <h2 className='text-center section-title mb-4 p-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='d-block w-75 mx-auto my-2 log-button border' variant="" type="submit">
                    Submit
                </Button>
            </Form>
            <div className='text-center mt-5'>
                <p>New Account? <Link to='/register' className='text-danger pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>
                <p>forget password? <button className='btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>reset password</button></p>
            </div>
            {errorElement}
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default Login;