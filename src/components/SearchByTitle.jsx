
"use client";
import { useState } from "react";
import { SearchField } from "@heroui/react";
import TopcourseCard from "./TopcourseCard";

const SearchByTitle = ({ courses }) => {
  const [search, setSearch] = useState("");

  const filteredCourses =
    search.trim() === ""
      ? courses 
      : courses.filter((course) =>
          course.title?.toLowerCase().includes(search.toLowerCase()),
        );

  return (
    <div>
      {/* SEARCH */}
      <SearchField className="w-[280px] mt-3">
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchField.ClearButton onClick={() => setSearch("")} />
        </SearchField.Group>
      </SearchField>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-5 mt-5">
        {filteredCourses.map((course) => (
          <TopcourseCard key={course.id} topcourse={course} />
        ))}
      </div>
    </div>
  );
};

export default SearchByTitle;




























// import { Label, SearchField } from "@heroui/react";


// const SearchByTitle = async ({ courses }) => {
//   console.log(courses);
//   return (
//     <div>
//       <div className="flex flex-col gap-4">
//         <SearchField name="search">
//           <SearchField.Group>
//             <SearchField.SearchIcon />
//             <SearchField.Input
//               className="w-[280px]"
//               placeholder="Search products..."
//             />
//             <SearchField.ClearButton />
//           </SearchField.Group>
//         </SearchField>
//       </div>
//     </div>
//   );
// };

// export default SearchByTitle;