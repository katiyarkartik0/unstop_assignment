import { NavLink} from "react-router-dom"
import "./Navbar.css"
const Navbar = () =>{
    return (
        <div className="navbar">
        <span className="assesmentHeading">

        Assesments
        </span>
        <NavLink to="/myAssesments" className="renderOption">My Assesments</NavLink>
        <NavLink to="/unstopAssesments" className="renderOption">Unstop Assesments</NavLink>
        </div>
    )
}

export default Navbar