// src/components/Training.js

import React from "react";

const Training = () => {
  // Define your training data here
  const trainingData = [
    {
      name: "Training 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci a velit eleifend volutpat.",
    },
    {
      name: "Training 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci a velit eleifend volutpat.",
    },
    {
      name: "Training 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci a velit eleifend volutpat.",
    },
    {
      name: "Training 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci a velit eleifend volutpat.",
    },
    {
      name: "Training 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod orci a velit eleifend volutpat.",
    },
    {
      name: "Training 2",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    // Add more training data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">Our Trainings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-300 text-left">Name</th>
              <th className="px-6 py-3 bg-gray-300 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {trainingData.map((training, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="px-6 py-4">{training.name}</td>
                <td className="px-6 py-4">{training.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Training;
