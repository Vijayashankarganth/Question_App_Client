import React  from "react";
import AdminQuestions from "../Questions/AdminQuestions";
import '../css/admin.css'

const AdminDashBoard = (props) =>{

    const handleLogout=()=>{
        localStorage.removeItem('adminToken')
        props.history.push('/admin')
    }
    return (
        <div className="admin">
            <h4>Welcome-Admin</h4>
            <button className="logout" onClick={handleLogout}>logout</button>

            <AdminQuestions />
        </div>
    )
}

export default AdminDashBoard