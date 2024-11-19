import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";
import InputField from "../components/InputField";
import TaskCard from "../components/TaskCard";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [newTask, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const loadTasks = async () => {
    try {
      const taskData = await getTasks(token);
      if (Array.isArray(taskData.data)) {
        setTasks(taskData.data.filter((task) => task.isDone === false));
        setTaskDone(taskData.data.filter((task) => task.isDone === true));
      } else {
        console.error("Error: Data is not an array");
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async () => {
    if (newTask.trim() !== "") {
      try {
        await addTask(token, newTask);
        setNewTask("");
        await loadTasks();
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const handleMarkDone = async (taskId) => {
    try {
      await markTaskDone(token, taskId);
      await loadTasks();
    } catch (error) {
      console.error("Error marking task as done:", error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(token, taskId);
      await loadTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEditProfile = () => {
    navigate("/updateprofile");
  };

  const handleSignOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/");
  };

  return (
    <div className="flex gap-x-8 flex-col lg:flex-row gap-y-8">
      {/* Profile Area */}
      <ProfileCard
        name={name}
        avatarUrl={avatarUrl}
        onEditProfile={handleEditProfile}
        onSignOut={handleSignOut}
      />

      <div className="w-[24em] md:w-[32em] bg-white flex flex-col px-10 py-10 rounded-[30px] h-full">
        {/* Add Task */}
        <div className="flex w-full items-center my-1 gap-2">
          <InputField
            label="Add a new task"
            type="text"
            id="newTask"
            name="newTask"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Plan your task here!"
            className="flex-grow"
          />
          <Button
            className="mt-5 px-2 py-2 text-white bg-gradient-to-b from-blue-400 to-blue-500 rounded-[15px] text-center font-semibold text-md transition"
            onClick={handleAddTask}
            title="Add Task"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        <div className="my-1">
          <h2 className="font-semibold text-lg text-slate-900">
            Tasks To Do - ({tasks.length})
          </h2>
          {tasks.length > 0 ? (
            tasks.map(
              (task) =>
                task &&
                task._id &&
                !task.isDone && <TaskCard key={task._id} task={task} />
            )
          ) : (
            <p className="text-slate-400 mt-2 text-center">
              No tasks here yet. Let's add some!
            </p>
          )}
        </div>

        {/* Done Task */}
        <div className="my-1">
          <h2 className="font-semibold text-green-600">
            Done - ({taskDone.length})
          </h2>
          {taskDone.length > 0 ? (
            taskDone.map(
              (task) =>
                task &&
                task._id && (
                  <div
                    key={task._id}
                    className="w-full  px-4 py-2 text-green-600 border-none bg-green-50 rounded-[15px] my-2"
                  >
                    <h2>{task.title}</h2>
                  </div>
                )
            )
          ) : (
            <p className="text-slate-400 mt-2 text-center">
              Tasks are still waiting to be done!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
