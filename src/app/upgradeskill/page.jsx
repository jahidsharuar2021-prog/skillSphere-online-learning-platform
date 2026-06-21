import Link from "next/link";
import { FaRegSadTear } from "react-icons/fa";

export default function NoCoursePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      {/* Icon */}
      <FaRegSadTear className="text-6xl text-blue-500 mb-4" />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        You haven't purchased any course yet
      </h1>

      {/* Message */}
      <p className="mt-3 text-gray-500 max-w-md">
        We're sorry 😔 You didn't purchase any course yet. Please purchase our
        course and upgrade your skill.
      </p>

      {/* Button */}
      <Link
        href="/courses"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
      >
        Browse Courses
      </Link>
    </div>
  );
}
