import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const navbar = ({ openSidebar }) => {
  const router = useRouter()
  const [isLogin, setlogin] = useState()
  const handlelogout = () => {
    localStorage.clear();
    router.push('/')
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('user'))
        setlogin(JSON.parse(localStorage.getItem('user')))
    }
  }, [])
  return (
    <>
      <div><nav className=" ">
        <div className="py-2">
          <div className="row align-items-center mx-lg-0 mx-3">
            <div className="col-lg-3 col-md-3 col-sm-3 col-5">
              <h3 className=" font-weight-bold mx-lg-5 mx-1" >IQuanta</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 mobilehidden">
              <div className="d-flex align-items-center pos-relative">
                <i className="bi bi-search pos-absolute left-5"></i>
                <input className="inputstyle pl-2 " type="search" placeholder="Search" aria-label="Search" />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-7">
              <div className="row align-items-center">
                <div className="col-lg-2 col-md-2 col-2 mobilehidden">
                  <i className="bi bi-chat iconbold" />
                </div>
                <div className="col-lg-2 col-md-2 col-2 mobilehidden">
                  <i className="bi bi-bell iconbold"></i>
                </div>
                <div className="col-lg-8 col-md-8 col-8">
                  {isLogin ? <>
                    <div className="d-flex gap-2 align-items-center">
                      <img src="/assets/photo.avif" className="br-5" alt="" width={40} />
                      <p className="mb-0 font14">{isLogin.firstName + ' ' + isLogin.lastName}</p>
                      <div className="dropdown mt-2">
                        <i className="bi bi-caret-down-fill cursor-pointer" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuLink">
                          <li onClick={handlelogout}><p className="dropdown-item mb-0 p-1 cursor-pointer"  >Logout</p></li>
                        </ul>
                      </div>

                    </div>
                  </> : <button className="btn btn-primary font14"><a className="text-white" href="/login">Login</a></button>}

                </div>
                <div className="col-lg-4 mobilevisible col-4 fs-1">
                  <div className="d-flex justify-content-end">
                    <i className="bi bi-list" onClick={openSidebar}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>
      </div>
    </>
  )
}

export default navbar