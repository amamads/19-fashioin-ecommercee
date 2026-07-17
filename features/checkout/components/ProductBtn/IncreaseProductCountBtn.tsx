import { Button } from "@/shared/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function IncreaseProductCountBtn() {
    return (
        <Button variant='outline' size='icon' className="size-10!">
            <PlusIcon />
        </Button>
    );
}