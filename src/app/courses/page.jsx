import TopcourseCard from "@/components/TopcourseCard";
export const dynamic = "force-dynamic";

const Toprating = async () => {
  const res = await fetch("https://skillsphere-five-tau.vercel.app/data.json");
  const courses = await res.json();
  console.log(courses);

  const topcourses = courses
    

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold my-5"> All Courses Page</h1>

        <div className="grid grid-cols-3 gap-5 ">
          {topcourses.map((topcourse) => (
            <TopcourseCard key={topcourse.id} topcourse={topcourse} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toprating;
