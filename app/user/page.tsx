import { Button } from "@/components/ui/button";
import { signout } from "../login/action";

export default function UserPage(){
    return(<div className="pt-24">
        <Button onClick={signout}> Signout</Button>
    Hey Welcome
    </div>)
}