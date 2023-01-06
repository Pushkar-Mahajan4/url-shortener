import {Outlet} from "react-router-dom";


const Error = () => {
    return(<>
        <p>This is an error page, you have trailed far and lost your way.... Time to go back</p>
        <div>
            <Outlet/>
        </div>
    </>);
}


export default Error;