import React from "react";

const Task = ({ taskObj, onComplete }) => {

  return (
    <div className="p-6 bg-white rounded-3xl leading-normal mt-4 shadow-md">
      <h3 className="text-lg text-yellow-300">{taskObj.title}</h3>
      <div className="deadline">son teslim: <span>{taskObj.deadline}</span></div>
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
