import { Button } from "@/shared/components/ui/button";
import { Trash2 } from "lucide-react";

export default function DeleteProductBtn() {
    return (
        <Button variant='outline' size='icon' className="size-10!">
            <Trash2 />
        </Button>
    )
}