import { Link, Outlet } from 'react-router-dom'


export default function BaseLayout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Contact App</Link>



                </div>
            </nav>
            <div className="container my-4">
                <Outlet />
            </div>
        </>
    )
}