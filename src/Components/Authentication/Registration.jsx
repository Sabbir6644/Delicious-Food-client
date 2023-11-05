import { useContext, useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Swal from "sweetalert2";
// import auth from "../../public/firebase.config";
import { AuthContext } from "./AuthProvider";
import auth from "../../../public/firebase.config";
import { Helmet } from "react-helmet-async";





const Registration = () => {
     const { createUser } = useContext(AuthContext);
     // console.log(createUser);
     const [alram, setAlram] = useState(null);
     const [show, setShow] = useState(false);
     const handleShow = () => {
          setShow(!show)
     }
     const nameRef = useRef(null);
     const emailRef = useRef(null);
     const imageRef = useRef(null);
     const passwordRef = useRef(null);

     const isStrongPassword = (password) => {
          // Regex pattern for at least one capital letter and one number
          const regex = /^(?=.*[A-Z])(?=.*\d)/;
          return regex.test(password);
     };

     const handleSubmit = e => {
          e.preventDefault();
          const name = e.target.name.value;
          const email = e.target.email.value;
          const imageUrl = e.target.imageUrl.value;
          const password = e.target.password.value;
          const accept = e.target.terms.checked;
          // console.log(accept, name, email, password);
          if (!accept) {
               return alert('Please accept our terms & condition ')
          } else if (password.length < 6) {
               return alert('pass must more then 6 ')
          } else if (!isStrongPassword(password)) {
               return alert('Password must contain at least one capital letter and one number.');
          } else {
             
               createUserWithEmailAndPassword(auth, email, password)

               createUser(email, password)
                    .then((result) => {

                         setAlram('');
                         updateProfile(result.user, {
                              displayName: name,
                              photoURL: imageUrl,
                         }).then( Swal.fire({
                              position: 'center',
                              icon: 'success',
                              title: 'Sign up Successful!',
                              showConfirmButton: false,
                              timer: 1500
                            }))
                              .catch(error => console.error(error))

                    })
                    .catch(() => {
                         setAlram('Already you have an account please try to login')
                    })
               nameRef.current.value = '';
               emailRef.current.value = '';
               passwordRef.current.value = '';
          }



     }
     return (
          <div className="flex mx-auto min-h-screen items-center">
               <Helmet>
                    <title>Delicious food | Registration</title>
               </Helmet>
               <div className=" w-11/12 md:w-[500px] mx-auto">
                    <div>
                    <h2 className="text-center text-5xl font-bold font-rancho text-red-900 mb-9">Please Registration </h2>
                         <form onSubmit={handleSubmit}>
                              <input ref={nameRef} className="border p-2 w-full mb-4" type="text" name="name" placeholder="Name..." required />
                              <input ref={emailRef} className="border p-2 w-full mb-4" type="email" name="email" placeholder="Email..." required />
                              <input ref={imageRef} className="border p-2 w-full " type="text" name="imageUrl" placeholder="Your Image url..." required />
                              <div className="relative">
                                   <input ref={passwordRef} className="border p-2 w-full my-4"
                                        type={show ? "text" : "password"}
                                        name="password"
                                        placeholder="Password..." required />
                                   <span className="absolute top-6 right-2"><button className="text-xl"
                                        onClick={(e) => {
                                             e.preventDefault();
                                             handleShow();
                                        }}>{show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button></span>
                              </div>
                              <div className="mb-2 text-black">
                                   <input type="checkbox" name="terms" id="terms" /><label className="ml-2" htmlFor="terms">Accept our terms & condition.</label>
                              </div>
                              <input className="border p-2 w-full text-white bg-red-900" type="submit" value="Register" />
                         </form>
                         <p className="text-black">Have an account? Please <Link className="text-blue-800" to={'/login'}>Login</Link></p>
                    </div>
                    <div>
                         {
                              alram ? <p className="text-red-600">{alram}</p> : ''
                         }
                    </div>
               </div>
          </div>
     );
};

export default Registration;