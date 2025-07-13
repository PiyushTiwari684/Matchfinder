import React, { useState } from "react";

const MatchList = ({ users }) => {
  const [shortlisted, setShortlisted] = useState([]);

  const toggleShortlist = (name) => {
    setShortlisted((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Your Matches</h2>

      {users.length === 0 ? (
        <p className="text-gray-600">No matches found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {users.map((user) => (
            <div
              key={user.name}
              className={`p-6 rounded-xl shadow-md border ${
                shortlisted.includes(user.name)
                  ? "bg-yellow-50 border-yellow-400"
                  : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {user.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Interests: {user.interests.join(", ")}
              </p>
              <button
                onClick={() => toggleShortlist(user.name)}
                className={`mt-4 px-4 py-2 rounded-lg transition font-medium ${
                  shortlisted.includes(user.name)
                    ? "bg-yellow-500 text-white hover:bg-yellow-600"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {shortlisted.includes(user.name) ? "Shortlisted" : "Shortlist"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchList;


