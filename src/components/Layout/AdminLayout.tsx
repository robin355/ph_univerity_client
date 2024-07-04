import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <div>
            <h1>This is Navbar</h1>
            <Outlet></Outlet>
        </div>
    );
}
export default AdminLayout;
