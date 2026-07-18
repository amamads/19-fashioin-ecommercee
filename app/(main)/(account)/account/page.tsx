import getAuth from "@/shared/services/getAuth";

export default async function AccountPage() {
    const {user} = await getAuth();
    console.log(user);
    return (
        <div>
            - userbox and tabs
            - account
            - order tracking
            - favorite
            - exit
        </div>
    );
}