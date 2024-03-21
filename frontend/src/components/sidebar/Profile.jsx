import React, { useState } from "react";

const Profile = () => {
  const [avatar, setAvatar] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [choices] = useState([
    "https://avatar.iran.liara.run/public/20",
    "https://avatar.iran.liara.run/public/11",
    "https://avatar.iran.liara.run/public/15",
    "https://avatar.iran.liara.run/public/2",
    "https://avatar.iran.liara.run/public/65",
    "https://avatar.iran.liara.run/public/57",
    "https://avatar.iran.liara.run/public/4",
    "https://avatar.iran.liara.run/public/39",
    "https://avatar.iran.liara.run/public/99",
    "https://avatar.iran.liara.run/public/job/doctor/male",
    "https://avatar.iran.liara.run/public/job/doctor/female",
    "https://avatar.iran.liara.run/public/job/designer/male",
    "https://avatar.iran.liara.run/public/job/designer/female",
    "https://avatar.iran.liara.run/public/job/police/male",
    "https://avatar.iran.liara.run/public/job/police/female",
    "https://avatar.iran.liara.run/public/62",
    "https://avatar.iran.liara.run/public/94",
    "https://avatar.iran.liara.run/public/79",
    "https://avatar.iran.liara.run/public/91",
    "https://avatar.iran.liara.run/public/82",
    "https://avatar.iran.liara.run/public/100",
    "https://avatar.iran.liara.run/public/78",
  ]);

  const handleAvatarChange = (choice) => {
    setAvatar(choice);
    setSelectedAvatar(choice);
    console.log("Avatar changed to:", choice);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAvatar) {
      setAvatar(selectedAvatar);
      console.log("Avatar changed to:", selectedAvatar);
    } else {
      console.log("Please select an avatar.");
    }
  };

  return (
    <div className="profile-edit-container">
      <h2 className="text-2xl text-center">Edit Profile</h2>
      <div className="avatar-container">
        <h3 className="text-center">Current Avatar</h3>
        {avatar && (
          <img src={avatar} alt="Current Avatar" className="avatar-image" />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="avatar-selection">
          <h3>Select New Avatar</h3>
          <div className="avatar-options flex justify-center">
            {choices.map((choice, index) =>
              choice ? (
                <React.Fragment key={index}>
                  <img
                    src={choice}
                    alt={`Avatar ${index}`}
                    className="avatar-option h-16 w-16 mx-2"
                    onClick={() => handleAvatarChange(choice)}
                  />
                  {}
                  {index < choices.length - 1 && choices[index + 1] === "" && (
                    <div className="avatar-spacer" />
                  )}
                </React.Fragment>
              ) : null
            )}
          </div>
        </div>
        {}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto block"
        >
          Okay
        </button>
      </form>
    </div>
  );
};

export default Profile;
