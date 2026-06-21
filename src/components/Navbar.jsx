
"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const userdata = authClient.useSession();
  const user = userdata.data?.user;

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2 bg-white border-slate-200 sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
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

        {/* Desktop Menu (lg+) */}
        <ul className="hidden lg:flex items-center gap-5 text-sm">
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

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Auth (desktop + mobile shared) */}
          <div className="hidden lg:flex items-center gap-3">
            {!user && (
              <ul className="flex items-center gap-3 text-sm">
                <li>
                  <Link href={"/signin"}>Login</Link>
                </li>
                <li>
                  <Link href={"/signup"}>Register</Link>
                </li>
              </ul>
            )}

            {user && (
              <div className="flex gap-3 items-center">
                <Avatar size="sm">
                  <Avatar.Image
                    alt="user"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <Button onClick={handleSignOut} size="sm" variant="danger">
                  Logout
                </Button>
              </div>
            )}
          </div>

          {/* Hamburger Button (sm/md only) */}
          <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
            <IoMdMenu />
          </button>
        </div>
      </nav>

      

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t px-4 py-3 space-y-3 bg-white">
          <Link onClick={() => setOpen(false)} href="/">
            Home
          </Link>
          <br />
          <Link onClick={() => setOpen(false)} href="/courses">
            Courses
          </Link>
          <br />
          <Link onClick={() => setOpen(false)} href="/profile">
            My Profile
          </Link>

          <div className="pt-3 border-t mt-3">
            {!user && (
              <div className="flex gap-4 text-sm">
                <Link href="/signin">Login</Link>
                <Link href="/signup">Register</Link>
              </div>
            )}

            {user && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <Avatar.Image
                      src={user?.image}
                      referrerPolicy="no-referrer"
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <span className="text-sm">{user?.name}</span>
                </div>

                <Button onClick={handleSignOut} size="sm" variant="danger">
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;






































// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";

// const Navbar = () => {

//   const userdata =authClient.useSession()
//   const user=userdata.data?.user
  
//   const handleSignOut=async()=>{
//     await authClient.signOut();

//   }

//   return (
//     <div className="border-b px-2 bg-white border-b border-slate-200 sticky top-0 z-50">
//       <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
//         <div className="flex gap-2 items-center">
//           <Image
//             src={"/logo.jpg"}
//             alt="logo"
//             loading="eager"
//             width={40}
//             height={40}
//             className="object-cover h-auto w-auto"
//           />
//           <h3 className="font-black text-lg">SkillSphere</h3>
//         </div>

//         <ul className="flex items-center gap-5 text-sm">
//           <li>
//             <Link href={"/"}>Home</Link>
//           </li>
//           <li>
//             <Link href={"/courses"}>Courses</Link>
//           </li>
//           <li>
//             <Link href={"/profile"}>My Profile</Link>
//           </li>
//         </ul>

//         <div className="flex gap-4">
//           {!user && (
//             <ul className="flex items-center gap-3 text-sm">
//               <li>
//                 <Link href={"/signin"}>Login</Link>
//               </li>
//               <li>
//                 <Link href={"/signup"}> Register</Link>
//               </li>
//             </ul>
//           )}

//           {user && (
//             <div className="flex gap-3">
//               {" "}
//               <Avatar size="sm">
//                 <Avatar.Image
//                   alt="John Doe"
//                   src={user?.image}
//                   referrerPolicy="no-referrer"
//                 />
//                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//               </Avatar>
//               <Button onClick={handleSignOut} size="sm" variant="danger">Logout</Button>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
