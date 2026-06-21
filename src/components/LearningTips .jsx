
import { Card } from "@heroui/react";
import Image from "next/image";
import { FaChalkboardTeacher } from "react-icons/fa";

const LearningTips  =async () => {
  
  const res = await fetch("https://skillsphere-five-tau.vercel.app/tips.json");
  const tips = await res.json();

    return (
      <section>
        <div className="max-w-7xl mx-auto mt-8">
          <div className="flex flex-col items-center  pb-5">
            <div className="flex gap-2 items-center">
              <Image
                src={"/logo.png"}
                alt="logo"
                loading="eager"
                width={60}
                height={60}
                className="object-cover h-auto w-auto"
              />
              <h3 className="font-black text-3xl text-[#422ad5]">
                Learning Guide
              </h3>
            </div>
            <p className=" text-xl text-muted font-medium">
              Important tips for learning growth
            </p>
          </div>

          <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-8  ">
            <div>
              <h3 className="text-2xl font-bold m-3 text-[#f43098]">
                Learning Tips
              </h3>

              <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-3 py-4">
                {" "}
                {tips.map((tip) => (
                  <Card
                    key={tip.id}
                    className="border rounded-xl overflow-hidden p-"
                  >
                    <div className="space-x-3">
                      <h1 className="font-medium">{tip.studyTechniques}</h1>
                      <h1 className="font-medium">{tip.timeManagementTip}</h1>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold m-3 text-[#f43098]">
                {" "}
                Top Instructors Section{" "}
              </h3>
              <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-3 p-2">
                {" "}
                {tips.map((tip) => (
                  <Card
                    key={tip.id}
                    className="border group rounded-xl overflow-hidden"
                  >
                    <div className="relative  w-full aspect-square group">
                      <Image
                        src={tip.image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={tip.title}
                        className=" object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div>
                      <h1 className="font-medium transition-colors duration-300 group-hover:text-blue-600">
                        {tip.title}
                      </h1>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default LearningTips ;