import TopcourseCard from "./TopcourseCard";


const Toprating =async () => {

  const res = await fetch(" http://localhost:3000/data.json");
  const courses= await res.json();
//   console.log(courses)
  
  const topcourses= courses
    .sort((a, b) => b.rating - a.rating) // Highest rating first
    .slice(0, 3);
   
    return (
      <div>
        <div>
          <h1 className="text-2xl font-bold my-5"> Popular Courses</h1>

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