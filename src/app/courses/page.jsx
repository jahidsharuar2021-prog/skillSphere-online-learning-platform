import SearchByTitle from "@/components/SearchByTitle";
import TopcourseCard from "@/components/TopcourseCard";
export const dynamic = "force-dynamic";

const AllCourses = async () => {
  const res = await fetch("https://skillsphere-five-tau.vercel.app/data.json");
  const courses = await res.json();
  console.log(courses);

  // const topcourses = courses
    

  return (
    <div>
      <div className=" bg-slate-100 p-5">
        <h1 className="text-3xl font-bold">All Courses Page</h1>

        <SearchByTitle  courses={courses} />
      </div>
    </div>

    // <div>
    //   <div>
    //     <div className="flex  justify-between  background-sla bg-slate-100  p-5">
    //       <h1 className="text-3xl font-bold "> All Courses Page</h1>
    //       <SearchByTitle></SearchByTitle>
    //     </div>

    //     <div className="grid grid-cols-3 gap-5 ">
    //       {topcourses.map((topcourse) => (
    //         <TopcourseCard key={topcourse.id} topcourse={topcourse} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllCourses;


