import { Button } from "@/shared/components/ui/button";
import { Minimize } from "lucide-react";

export default function DecreaseProductCountBtn() {
    return (
        <Button variant='outline' size='icon' className="size-10!">
            <Minimize />
        </Button>
    );
}