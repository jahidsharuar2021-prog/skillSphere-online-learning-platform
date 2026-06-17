import { Button, Card, Chip, Separator } from "@heroui/react";
import { FaChalkboardTeacher } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const TopcourseCard = ({ topcourse }) => {
  // console.log(photo);
  return (
    <Card className="border rounded-xl overflow-hidden">
      <div className="relative  w-full aspect-square group">
        <Image
          src={topcourse.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={topcourse.name}
          className=" object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
        <Chip size="small" className="absolute right-2 top-2">
          {topcourse.category}
        </Chip>
      </div>
      <div>
        <h1 className="font-medium">{topcourse.title}</h1>
      </div>

      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <p>
            <FaChalkboardTeacher />
          </p>
          <p> {topcourse.instructor}</p>
        </div>

        <Separator orientation="vertical" />

        <div className="flex items-center gap-2">
          <p>
            <FaStar />
          </p>
          <p> {topcourse.rating}</p>
        </div>
      </div>

      <Link href={`/courses/${topcourse.id}`}>
        <Button variant="outline" className={"w-full"}> View Details </Button>
      </Link>
    </Card>
  );
};

export default TopcourseCard;
