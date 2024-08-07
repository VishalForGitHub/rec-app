import "./home.css"
import { nav } from "./helper.js";
export function Home(){
    return(
        < div className="home">
            <h2>Vishal Dhokchaule</h2>
            

            <ul id="nav-item">
                <li onClick={()=>nav("about")}>Home</li>
                <li  onClick={()=>nav("about")}>Experience</li>
                <li  onClick={()=>nav("about")}>Projects</li>
                <li  onClick={()=>nav("about")}>Contact</li>
            </ul>
            
        </div>
    );
}