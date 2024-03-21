import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		profilePic: {
			type: String,
			default: "",
		},
		role: {
			type: String,
			required: true,
			default: "Student"
		}
	},
	{ timestamps: true }
);

const teacherSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female"],
		},
		profilePic: {
			type: String,
			default: "",
		},
		role: {
			type: String,
			required: true,
			default: "Teacher"
		}
	},
	{ timestamps: true }
)

const Student = mongoose.model("Teacher", studentSchema);
const Teacher = mongoose.model("Student", teacherSchema);

const User = Student || Teacher;

export default User;