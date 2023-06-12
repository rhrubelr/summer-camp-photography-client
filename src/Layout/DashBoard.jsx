import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome, FaCalendar, FaShoppingCart, FaWallet, FaUtensils, FaBook, FaUsers } from 'react-icons/fa'
import useEnroll from "../Hooks/useEnroll";
import { Helmet } from "react-helmet";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";


// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  // const [cart]=useCart()
  // Todo
  // const isAdmin = true;
  // const [isAdmin]= useAdmin()

  const [cart] = useEnroll();


  return (

    <div>
      <Helmet>
        <title> Photography School | Dash Board</title>
      </Helmet>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <Outlet></Outlet>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-black text-white">
            {/* Sidebar content here */}


            {
              isAdmin ?
                (<>
                  <li><NavLink to='/'><FaHome></FaHome>Admin Home</NavLink></li>

                  <li><NavLink to='/dashBoard/all-users'><FaShoppingCart></FaShoppingCart>
                    All Users <div className="badge badge-primary"></div>
                  </NavLink></li>

                </>)
                : isInstructor ? (
                  <>
                    <li><NavLink to='/'><FaHome></FaHome>Instructor Home</NavLink></li>

                    <li><NavLink to='/dashBoard/add-class'><FaShoppingCart></FaShoppingCart>
                      Add Class <div className="badge badge-success"></div>
                    </NavLink></li>

                    <li><NavLink to='/dashBoard/my-class'><FaShoppingCart></FaShoppingCart>
                      My Class <div className="badge badge-success"></div>
                    </NavLink></li>
                  </>
                )
                  : (
                    <>
                    <li><NavLink to='/'><FaHome></FaHome>Student Home</NavLink></li>
                      <li> <NavLink to='/dashBoard/selectedClass'><FaShoppingCart></FaShoppingCart>
                        My Selected Class <div className="badge badge-secondary"> {cart.length}</div>
                      </NavLink></li>


                      <li><NavLink to='/dashBoard/myEnrollClass'><FaShoppingCart></FaShoppingCart>
                        My Enroll Class <div className="badge badge-success"></div>
                      </NavLink></li>


                      <li><NavLink to='/dashBoard/payment-history'><FaWallet></FaWallet> Payment History</NavLink></li>

                    </>
                  )


            }

            {/* <li><NavLink to='/'><FaHome></FaHome>Admin Home</NavLink></li> */}
            {/* <li> <NavLink to='/dashBoard/selectedClass'><FaShoppingCart></FaShoppingCart>
              My Selected Class <div className="badge badge-secondary"> {cart.length}</div>
            </NavLink></li> */}

            {/* <li><NavLink to='/dashBoard/myEnrollClass'><FaShoppingCart></FaShoppingCart>
              My Enroll Class <div className="badge badge-success"></div>
            </NavLink></li> */}

            {/* <li><NavLink to='/dashBoard/all-users'><FaShoppingCart></FaShoppingCart>
              All Users <div className="badge badge-success"></div>
            </NavLink></li> */}


            {/* <li><NavLink to='/dashBoard/add-class'><FaShoppingCart></FaShoppingCart>
              Add Class <div className="badge badge-success"></div>
            </NavLink></li> */}



            {/* <li><NavLink to='/dashBoard/my-class'><FaShoppingCart></FaShoppingCart>
              My Class <div className="badge badge-success"></div>
            </NavLink></li> */}

            {/* <li><NavLink to='/dashBoard/payment-history'><FaWallet></FaWallet> Payment History</NavLink></li> */}




          </ul>

        </div>
      </div>
    </div>




  );
};

export default DashBoard;