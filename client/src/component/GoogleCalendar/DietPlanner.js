import React, { useState } from 'react';
import NavBar from '../NavBar';

function DietPlanner({currentUser}) {
const [meals, setMeals] = useState([]);
const [tasks, setTasks] = useState([]);

const addMeal = () => {
    setMeals([...meals, '']);
};
const deleteMeal = (index) => setMeals(meals.filter((_, i) => i !== index));
const updateMeal = (index, value) => setMeals(meals.map((m, i) => (i === index ? value : m)));

const addTask = () => setTasks([...tasks, '']);
const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
const updateTask = (index, value) => setTasks(tasks.map((t, i) => (i === index ? value : t)));

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('meals', JSON.stringify(meals));
    formData.append('tasks', JSON.stringify(tasks));
    const response = await fetch('http://127.0.0.1:5555/healthconditions', {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    console.log(data);
}

return (
    <>
    <NavBar currentUser={currentUser}/>
    
    <div className="flex justify-center mt-10">
    <div className="w-1/2 bg-white shadow-md rounded p-8">
        <h2 className="text-xl font-bold mb-6">Diet Planner</h2>
        <h1>COMING SOON</h1>
        <h4>Join us on the journey to a healthier and more organized lifestyle. Holistic Wellness is committed to bringing you an all-in-one solution for your well-being. </h4>
            <h1>Stay tuned for our official launch!</h1> 
        
    
    
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
        onClick={() => addMeal()}
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