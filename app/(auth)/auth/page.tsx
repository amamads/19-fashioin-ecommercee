"use client";

import Login from "@/features/auth/components/Login";
import Register from "@/features/auth/components/Register";
import Register2 from "@/features/auth/components/Register copy";
import { signOut } from "@/lib/auth-client";
import Logo from "@/shared/components/atoms/Logo";
import { H4, H5 } from "@/shared/components/atoms/Typography";
import { Button } from "@/shared/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import useAuth from "@/shared/hooks/useAuth";

export default function LoginPage() {
  const tabs = [
    {
      value: "login",
      title: "ورود",
      content: <Login />,
    },
    {
      value: "register",
      title: "ثبت نام",
      content: <Register />,
    },
  ];
  const { isLoggedIn, user } = useAuth();
  console.log(user);
  return (
    <div className="px-default pt-20 col-flex gap-12 items-center min-h-screen">
      <div>
        <Logo className="size-30" />
        <H5>
          به
          <span className="text-primary"> AMS </span>
          خوش آمدید
        </H5>
        <H4>{user?.name}</H4>
      </div>
      {isLoggedIn ? (
        <Button onClick={() => signOut()}>sign out</Button>
      ) : (
        <Tabs defaultValue={tabs[1].value} className="w-full">
          <TabsList className="w-full">
            {tabs.map(({ title, value }) => (
              <TabsTrigger value={value} key={value}>
                {title}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map(({ content, value }) => (
            <TabsContent value={value} key={value} className='py-6'>
              {content}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}
