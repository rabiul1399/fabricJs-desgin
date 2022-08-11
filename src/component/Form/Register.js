import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    let signInError;
    const navigate = useNavigate();
    
    if (loading || gLoading || updating) {
        return <progress class="progress w-56"></progress>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    if (user || gUser) {
        navigate('/home')
    }

    const onSubmit = async data => {
        console.log(data)
        const {email,password,name} =data;
       
        await  createUserWithEmailAndPassword(email ,password);
        await updateProfile({ displayName:name });
    
    }
    return (
        <div className="hero min-h-screen">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Sign-Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                               
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs mb-5"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                      
                    </div>

                    {signInError}
                    <input className='btn w-full max-w-xs text-white' type="submit" value="SignUp" />
                </form>
                <p className='text-sm'>Already have an account? <Link to='/login' className='text-primary'>please login</Link></p>

                <div className="divider">OR</div>

                <button onClick={() => signInWithGoogle()} className="btn btn-outline  uppercase text-lg font-normal"> <img className='w-9 mr-2' alt="" />Continue with google</button>


            </div>

        </div>

    </div>
    );
};

export default Register;