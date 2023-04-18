import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";
const Task = ({ taskObj, onComplete }) => {
  const deadlineDate = new Date(taskObj.deadline);
  const daysLeft = differenceInDays(deadlineDate, new Date());
  const toNow = formatDistanceToNow(deadlineDate, { addSuffix: true, locale: tr });
  return (
    <div className="p-6 bg-white rounded-3xl leading-normal mt-4 shadow-md">
      <h3 className="text-lg text-yellow-300">{taskObj.title}</h3>
      son teslim:{" "}
      <div className="deadline">son teslim:<span className={`${daysLeft < 3 ? "bg-[#ffd9d4]" : ""}`}>{toNow}</span></div>
      <p className="pt-2 pr-0 pb-3 text-sm text-gray-600">{taskObj.description}</p>
      <div >
        {taskObj.people.map((p) => (
          <span className="block pt-2 pr-3 text-sm border-r-1 border-solid border-inherit mr-1 mb-1.5 rounded-3xl" key={p}>{p}</span>
        ))}
      </div>
      
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
      
    </div>
  );
};

export default Task;
