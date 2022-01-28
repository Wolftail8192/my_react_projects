import {useLocation} from "react-router-dom";

export default function UserDetails ()  {
    let {state:user} = useLocation()

return(
    <div>
        {
            JSON.stringify(user)
        }

    </div>
)
}