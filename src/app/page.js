'use client'
import { useState } from "react"
import { authenticateUser } from "./utils/authenticateUser";
import { useMutation } from 'react-query';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const Home = () => {
  const router = useRouter()
  const [loginform, setloginform] = useState({
    username: '', password: ''
  })

  const { mutate: loginUser, isLoading, isError, error } = useMutation(authenticateUser, {
    onSuccess: (data) => {
      if (data) {
        localStorage.setItem('user', JSON.stringify(data))
        toast.success('Login Successfull')
        router.push('/home')
      } else {
        alert(`Login failed: ${isError}`);
      }
    },
  });

  const handleformchange = (e) => {
    const newdata = { ...loginform };
    newdata[e.target.name] = e.target.value;
    setloginform(newdata);
  };
  const handlelogin = (e) => {
    e.preventDefault()
    const { username, password } = loginform
    loginUser({ username, password });
  }
  return (
    <>
      <div className="div px-2">
        <div className="row">
          <div className="col-lg-6">
            <div className="login-box">
              <div className="mx-5">
                <img src="/assets/iQuanta_Black_Logo.png" className="img-fluid" width={300} alt="" />
                <h1 className="fw-bold">iQuanta - India's No. 1 CAT Online Coaching</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login-box">
              <div className="login-container ">
                <div className="ps-3 pt-3">
                  <img src="/assets/iQuanta_Black_Logo.png" className="img-fluid" width={100} alt="" />
                </div>
                <div className="login-body">
                  <form className="login-form" onSubmit={handlelogin} >
                    <div className="form-group">
                      <label>Username:</label>
                      <input type="text" className="col-lg-12" id="username" name="username" value={loginform.username} onChange={handleformchange} required />
                    </div>
                    <div className="form-group">
                      <label>Password:</label>
                      <input type="password" className="col-lg-12" id="password" name="password" value={loginform.password} onChange={handleformchange} required />
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <button type="submit">Login</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home