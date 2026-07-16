'use client'

import { BodySm } from "@/shared/components/atoms/Typography";
import LayoutContainer from "@/shared/components/LayoutContainer";
import Navbar from "@/shared/components/Navbar";
import { Button } from "@/shared/components/ui/button";
import paths from "@/shared/paths";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <LayoutContainer className="flex-1 flex flex-col w-full">
                <div className="flex-1 col-flex items-center justify-center gap-3">
                    <Image
                        src="/not-found.png"
                        alt="not-found"
                        width={190}
                        height={162}
                    />

                    <BodySm>
                        صفحه مورد نظر پیدا نشد!
                    </BodySm>
                </div>

                <Button
                    className="w-full mb-4"
                    onClick={() => router.push(paths.main.home)}
                >
                    برو به صفحه اصلی
                </Button>
            </LayoutContainer>
        </div>
    );
}