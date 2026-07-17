import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
export default function StoreBreadcrumb() {
    return (
        <Breadcrumb className="py-3 pr-5 bg-neutral-1">
            <BreadcrumbList className="flex flex-nowrap overflow-x-auto no-scrollbar gap-1">
                <BreadcrumbItem>صفحه اصلی</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>دسته بندی محصولات</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>لباس مجلسی</BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>لباس مجلس میدی </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}