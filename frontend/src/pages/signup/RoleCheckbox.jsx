const RoleCheckbox = ({ onRoleCheckboxChange, selectedRole }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`cursor-pointer gap-2 label ${
            selectedRole === "Student" ? "selected" : ""
          }`}
        >
          <span className="label-text">Student</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedRole === "Student"}
            onChange={() => onRoleCheckboxChange("Student")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`cursor-pointer gap-2 label ${
            selectedRole === "Teacher" ? "selected" : ""
          }`}
        >
          <span className="label-text">Teacher</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedRole === "Teacher"}
            onChange={() => onRoleCheckboxChange("Teacher")}
          />
        </label>
      </div>
    </div>
  );
};
export default RoleCheckbox;
