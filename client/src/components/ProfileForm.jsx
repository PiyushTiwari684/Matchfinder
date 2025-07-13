import React, { useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom"

const ProfileForm = ({onMatchesFound}) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    interests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = async(e) => {
    e.preventDefault();
    const formattedData = {
      name:formData.name.trim(),
      age:Number(formData.age),
      interests: formData.interests.split(',').map((i)=> i.trim())
    };
    // console.log("Submitting user:", formattedData);
    try {
      // send the user data to the backend 
      await axios.post('http://localhost:5000/api/addUser',formattedData);
      // find the user with the matching interests
      const res = await axios.get(`http://localhost:5000/api/matches/${formattedData.name}`);
      onMatchesFound(res.data); // send matches to the parent component to get displayed
  
      setFormData({name:'',age:'',interests:''}) // set the empty 
      
    } catch (error) {
      alert(error?.response?.data?.message || "Something went Wrong while fetching the ineterests");
    }
  };

  return (
    <div className="min-h-[500px] bg-gradient-to-b from-blue-100 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to Matchmaker 👋
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Let's get to know you so we can find your best matches.
        </p>

        <form
          onSubmit={handleForm}
          className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-8"
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="E.g. Piyush"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Your Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="E.g. 22"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">
              Your Interests
            </label>
            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="E.g. music, tech, reading"
            />
            <p className="text-sm text-gray-500 mt-1">
              Tip: Separate your interests with commas
            </p>
          </div>

          <div className="md:col-span-2 text-right">
            
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
              >
                Find Matches
              </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;


