import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Register.css'

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let errorElement;

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    };

    const handleRegister = async (event) => {

        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            toast('password not matched');
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }
    return (
        <div className='container mx-auto w-50 mt-5 form-container'>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Enter Your Password again" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={agree ? 'text-success' : 'text-danger'} htmlFor="terms" label="Agree With Terms and Condition?" />
                </Form.Group>
                <Button disabled={!agree} className='d-block w-50 mx-auto my-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className='text-center mt-5'>
                <p>Already Have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Please LogIn</Link></p>
            </div>
            {errorElement}
            
            <ToastContainer />
        </div>
    );
};

export default Register;