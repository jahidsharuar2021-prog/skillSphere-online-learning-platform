import Image from "next/image";
import { Card, Separator } from "@heroui/react";
import { FaChalkboardTeacher, FaStar } from "react-icons/fa";
import { GiLevelTwo } from "react-icons/gi";

const CourseDetailsPage = async ({ params }) => {
  const { id } =await params;
  console.log(id);

  const res = await fetch(
    "https://skill-sphere-online-learning-platfo-ashy.vercel.app/data.json",
  );
  const courses = await res.json();

  const course = courses.find((p) => p.id == id);

  if (!course) {
    return <p className="text-center mt-10">Course not found</p>;
  }

  return (
    <div className="max-w-[400px] w-full mx-auto ">
      <Card className="border rounded-2xl overflow-hidden shadow-sm ">
        {/* IMAGE SECTION */}
        <div className="relative w-full aspect-video sm:aspect-[16/9]">
          <Image
            src={course.image}
            fill
            alt={course.title}
            className="object-cover"
            sizes="(max-width: 300px) 100vw, 300px"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-6 space-y-2">
          <h1 className="text-xl sm:text-2xl font-semibold">{course.title}</h1>
          <p className=" "> {course.duration} </p>
          <div className="flex items-center">
            <GiLevelTwo />
            <p className=" ">{course.level}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <FaChalkboardTeacher />
              <span>{course.instructor}</span>
            </div>
            <Separator orientation="vertical" className="hidden sm:block h-5" />
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>{course.rating}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetailsPage;
