import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaHome, FaCalendar, FaShoppingCart, FaWallet, FaUtensils, FaBook, FaUsers } from 'react-icons/fa'

// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    // const [cart]=useCart()
    // Todo
    // const isAdmin = true;
    // const [isAdmin]= useAdmin()















    return (
        
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      

    <li><NavLink to='/deshbord/userhome'><FaHome></FaHome>Admin Home</NavLink></li>
    <li><NavLink to='/deshbord/reservation'><FaUtensils></FaUtensils>  Add Items</NavLink></li>
    <li><NavLink to='/deshbord/history'><FaWallet></FaWallet>Manage Items</NavLink></li>
    <li><NavLink to='/deshbord/mycart'><FaBook></FaBook> Manage Booking</NavLink></li>
    <li><NavLink to='/deshbord/allusers'> <FaUsers></FaUsers> All Users</NavLink></li>
 



<li><NavLink to='/deshbord/userhome'><FaHome></FaHome>User Home</NavLink></li>
    <li><NavLink to='/deshbord/reservation'><FaCalendar></FaCalendar> Reservation</NavLink></li>
    <li><NavLink to='/deshbord/history'><FaWallet></FaWallet> Payment History</NavLink></li>
    <li><NavLink to='/deshbord/mycart'><FaShoppingCart></FaShoppingCart>
    Shoping Cart <div className="badge badge-secondary"></div>
    </NavLink></li>
    </ul>
  
  </div>
</div>




    );
};

export default DashBoard;