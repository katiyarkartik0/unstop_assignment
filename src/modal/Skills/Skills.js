import { useState } from "react";

import "./Skills.css";

const Skills = () => {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    const value = e.target.value;
    if (!value.trim()) {
      return;
    }
    setTags((prevTags) => [...prevTags, value]);
    e.target.value = "";
  };

  const removeTag = (index) => {
    setTags(tags.filter((tag, i) => i !== index));
  };

  return (
    <div>
      <label htmlFor="Skills" className="fieldHeading">
      Skills
      </label>

      <div id="Skills" name="Skills" className="tags-input-container edit-skills">
        {tags.map((tag, index) => {
          return (
            <div className="tag-item">
              <span className="text">{tag}</span>
              <span className="close" onClick={() => removeTag(index)}>
                &times;
              </span>
            </div>
          );
        })}
      </div>
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="tags-input"
        placeholder="Type Here"
      ></input>
    </div>
  );
};

export default Skills;
