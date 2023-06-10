import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome, FaCalendar, FaShoppingCart, FaWallet, FaUtensils, FaBook, FaUsers } from 'react-icons/fa'
import useEnroll from "../Hooks/useEnroll";

// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    // const [cart]=useCart()
    // Todo
    // const isAdmin = true;
    // const [isAdmin]= useAdmin()

    const [cart] = useEnroll();


    return (
        
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      

    <li><NavLink to='/'><FaHome></FaHome>User Home</NavLink></li>
    <li><NavLink to='/dashBoard/selectedClass'><FaShoppingCart></FaShoppingCart>
    My Selected Class <div className="badge badge-secondary">{cart.length}</div>
    </NavLink></li>    
 



    <li><NavLink to='/deshbord/reservation'><FaCalendar></FaCalendar> About Me</NavLink></li>
    <li><NavLink to='/dashBoard/payment-history'><FaWallet></FaWallet> Payment History</NavLink></li>
    
    </ul>
  
  </div>
</div>




    );
};

export default DashBoard;