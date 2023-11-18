import React, { useState } from "react";

const Task = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="min-h-screen">
      <main className="w-full overflow-x-hidden overflow-y-auto bg-base-300 p-5">
        <div className="flex justify-center items-center mb-5">
          <div role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              View List
            </a>
            <a
              role="tab"
              className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Add to List
            </a>
          </div>
        </div>

        {activeTab === 1 && (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="card bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>
        )}

        {activeTab === 2 && (
          <div>
            <div>
              <div className="flex justify-center">
                <div className="card w-full md:w-128 bg-neutral text-neutral-content">
                  <div className="card-body">
                    <h2 className="card-title">Add to List</h2>
                    <p>Content for adding to the list goes here.</p>
                    
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Category
                      </option>
                      <option>Personal</option>
                      <option>Work</option>
                      <option>University</option>
                      <option>Other</option>
                    </select>
                    
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Task Summary</span>
                        <span className="label-text-alt">
                          eg: conquor the galaxy
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                      />

                    </div>
                    {/* Additional content and actions for Add to List */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Task;
