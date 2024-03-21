import React, { useState } from "react";
import useIdentity from "../../hooks/useIdentity";

const UserIdentity = () => {
  const [inputs, setInputs] = useState({
    role: "",
  });

  const { loading, identity } = useIdentity();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await identity(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your Role?</span>
            </div>
            <input
              type="text"
              placeholder="Teacher and student"
              className="input input-bordered w-full max-w-xs"
              value={identity.role}
              onChange={(e) => setInputs({ ...identity, role: e.target.value })}
            />
          </label>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Enter"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserIdentity;
