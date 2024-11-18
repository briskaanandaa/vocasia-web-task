import React from "react";
import CircleImage from "../components/CircleImage";
import BlueButton from "../components/BlueButton";
import RedButton from "../components/RedButton";
import AddTask from "../components/AddTask";
import Person from "../assets/person.png";
import ToDoTaskCard from "../components/ToDoTaskCard";
import DoneTaskCard from "../components/DoneTaskCard";

const Task = () => {
  return (
    <div className=" flex gap-x-8 flex-col lg:flex-row gap-y-8">
      {/* Profile Area*/}
      <div className="bg-white flex flex-col items-center justify-center px-10 py-10 rounded-[30px] ">
        <CircleImage link={Person} />
        <h1 className="text-2xl font-semibold text-slate-900">
          {" "}
          Hello! Briska
        </h1>
        <BlueButton text="Edit Profile" link="/updateprofile" />
        <RedButton text="Sign Out" link="/login" />
      </div>

      {/* To Do Task Area*/}
      <div className="w-[22em] md:w-[44em] bg-white flex flex-col px-10 py-10 rounded-[30px] h-full">
        {/* Add Task */}
        <div className="flex justify-center items-center">
          <AddTask
            label="Task Name"
            type="text"
            name="task"
            placeholder="Ex. Reading a book"
            required={true}
            link="/task"
          />
        </div>

        {/* To Do Task */}
        <div className="flex flex-col items-start">
          <h2 className="text-blue-500 text-lg mt-2 font-semibold">
            Tasks to do (4)
          </h2>
          <ToDoTaskCard
            task="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non quis enim, dolorum culpa modi odio sint qui vel delectus recusandae ullam, facilis perferendis illum!"
          />
          <ToDoTaskCard task="Playing a Game" />
          <ToDoTaskCard task="Cooking a Soup" />
        </div>

        {/* Done Task */}
        <div className="flex flex-col items-start">
          <h2 className="text-green-600 text-lg mt-2 font-semibold">
            Done (2)
          </h2>
          <DoneTaskCard task="Helping Momma" />
          <DoneTaskCard task="Buy a Milk" />
        </div>
      </div>
    </div>
  );
};

export default Task;
