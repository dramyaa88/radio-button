import React, { useState } from "react";

const Gender = () => {
  let genders = ["Male", "Female", "Other"];
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gender);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-96 h-96 border border-black bg-slate-100 m-4 pt-16 pb-20 px-16">
          <h1 className="text-3xl font-bold pr-3 pb-2">Gender</h1>
          <div>
            {genders.map((result, index) => (
              <div>
                <input
                  key={index}
                  type="radio"
                  value={result}
                  name="radiovalues"
                  onChange={(e) => setGender(e.target.value)}
                />
                <b>{result}</b>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <button className="p-2 m-2 bg-green-300 rounded-lg font-bold">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Gender;
