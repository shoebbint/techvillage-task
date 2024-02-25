
import { Link, Outlet, useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import {  faUser, faEye, faRightFromBracket, faChartLine, faGift, faPeopleGroup, faCartFlatbedSuitcase, faCircleChevronRight, faSignIn, faRegistered } from '@fortawesome/free-solid-svg-icons'
import { useAuthState } from 'react-firebase-hooks/auth';

const DashboardLayout = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate()
  const handleSignout = () => {
    signOut(auth);
    navigate('/login');
  }
  return (
    <div className=''>
      <div className="navbar bg-base-100">
        <div className="flex-1">
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <label htmlFor="my-drawer-2" className='lg:hidden drawer-button'><FontAwesomeIcon className='' icon={faBars} size="xl" /></label>
          <Link to={"/"} className=" normal-case text-xl mx-5">adminOgram</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar me-5 ">
              <div className="w-10 rounded-full ">
                {user?.photoURL ?
                  <img src={user?.photoURL} /> : <FontAwesomeIcon size='lg' className='p-2' icon={faUser} />
                }
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <button onClick={handleSignout}>   <li><a>Logout</a></li></button>

            </ul>
          </div>
        </div>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  ">

          <Outlet />         
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content ">

            <li><Link to={"/"}><FontAwesomeIcon icon={faChartLine} /> Dashboard</Link></li>
            <li><Link to={"/productlist"}><FontAwesomeIcon icon={faGift} /> Product List</Link></li>

            <li >
              <button className="dropdown dropdown-bottom">
              <label tabIndex={0} className=""><FontAwesomeIcon icon={faPeopleGroup} /> Customers <FontAwesomeIcon className='ms-20' icon={faCircleChevronRight} /></label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to={"/customerlist"}>Customer List</Link></li>   
                  <li><Link to={"/addcustomer"}>Add Customer</Link></li>
                </ul>
              </button>
              {/* <label className="dropdown dropdown-bottom" tabIndex={0} className=""><FontAwesomeIcon icon={faPeopleGroup} /> Customers <FontAwesomeIcon className='ms-20' icon={faCircleChevronDown} /></label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={"/customerlist"}>Customer List</Link></li>    
                <li><a>Add Customer</a></li>
              </ul> */}


            </li>




            <li><Link to={"/orderlist"}><FontAwesomeIcon icon={faCartFlatbedSuitcase} /> Order List</Link></li>
            <li><Link to={"/home"}><FontAwesomeIcon icon={faEye} /> Live view</Link></li>
            <li><Link to={"/login"}><FontAwesomeIcon icon={faSignIn} /> Login view</Link></li>
            <li><Link to={"/register"}><FontAwesomeIcon icon={faRegistered} /> Register view</Link></li>
            <button className='btn btn-primary' onClick={handleSignout}><FontAwesomeIcon className='me-2' icon={faRightFromBracket} />  Log out</button>
          </ul>

        </div>
      </div>

    </div>
  );
};

export default DashboardLayout;