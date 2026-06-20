"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

  const userdata =authClient.useSession()
  const user=userdata.data?.user
  
  const handleSignOut=async()=>{
    await authClient.signOut();

  }

  return (
    <div className="border-b px-2 bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center gap-3 text-sm">
              <li>
                <Link href={"/signin"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}> Register</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
              {" "}
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="danger">Logout</Button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
