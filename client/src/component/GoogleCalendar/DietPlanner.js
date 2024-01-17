import React, { useState } from 'react';
import NavBar from '../NavBar';

function DietPlanner({currentUser}) {
const [meals, setMeals] = useState([]);
const [tasks, setTasks] = useState([]);

// const addMeal = () => {
//     // Call setMeals to update meals with the meal plan that was just submitted.
//     setMeals([...meals, newMealFromUser]);
//     // Make a POST request where you send the meal plan that was just submitted to the database.
//     // fetch("", {})
//     // .then(response => response.json())
//     // .then(newMeal => setMeals([...meals, newMealFromUser]));
// };
const deleteMeal = (index) => setMeals(meals.filter((_, i) => i !== index));
const updateMeal = (index, value) => setMeals(meals.map((m, i) => (i === index ? value : m)));

const addTask = () => setTasks([...tasks, '']);
const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
const updateTask = (index, value) => setTasks(tasks.map((t, i) => (i === index ? value : t)));

// function setMeals() {
//     setMeals([]);
// }

return (
    <>
    <NavBar currentUser={currentUser}/>
    <div className="flex justify-center mt-10">
    <div className="w-1/2 bg-white shadow-md rounded p-8">
        <h2 className="text-xl font-bold mb-6">Diet Planner</h2>
        
        {meals.map((meal, index) => (
        <div className="flex items-center mb-4" key={index}>
            <input 
            type="text"
            value={meal}
            onChange={(e) => updateMeal(index, e.target.value)}
            className="flex-1 mr-4 py-2 px-4 border border-gray-300 rounded focus:outline-none"
            />
            <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={() => deleteMeal(index)}
            >
            Delete
            </button>
        </div>
        ))}
        
        <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={() => console.log("TODO")}
        >
        Add Meal
        </button >
        {/* <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded' >
        </button> */}
        <div>
        <div className="flex justify-center mt-10">
        <div className="w-1/2 bg-white shadow-md rounded p-8">
        <h2 className="text-xl font-bold mb-6">Scheduler</h2>
        
        {tasks.map((task, index) => (
            <div className="flex items-center mb-4" key={index}>
            <input 
                type="text"
                value={task}
                onChange={(e) => updateTask(index, e.target.value)}
                className="flex-1 mr-4 py-2 px-4 border border-gray-300 rounded focus:outline-none"
            />
            <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => deleteTask(index)}
            >
                Delete
            </button>
            </div>
        ))}
        
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={addTask}
        >
            Add Task
        </button>
        </div>
    </div>
        </div>
    </div>
    
    </div>
    </>
);
}



export default DietPlanner;