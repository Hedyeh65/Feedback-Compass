import React, { useState } from "react";
import axios from "axios";
import "./MentorFeedback.css";
import "./StudentProfile.css";
const CourseProgressItem = ({ date, course, completed, id, student_id }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    axios
      .put(`/api/syllabus?student_id=${student_id}`, {
        completed: e.target.checked,
        syllabus_id: id,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  return (
    <div id="modules">
      <div id="modules-title">
        {date} {course}
        <label className="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default CourseProgressItem;
