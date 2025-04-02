import React, { useState } from "react";
import "./Courses.css";

const Course = () => {
  const courses = [
    { title: "Math (NCERT)", img: "https://img.icons8.com/?size=100&id=18490&format=png&color=1A1A1A", subclasses: ["Algebra", "Geometry", "Trigonometry"] },
    { title: "Math Revision", img: "https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png", subclasses: ["Past Papers", "Quick Review"] },
    { title: "Science (NCERT)", img: "https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png", subclasses: ["Biology", "Physics", "Chemistry"] },
    { title: "Science Revision", img: "https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png", subclasses: ["Key Notes", "Mock Tests"] },
    { title: "Physics (NCERT)", img: "https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png", subclasses: ["Mechanics", "Thermodynamics"] },
    { title: "Physics Revision", img: "https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png", subclasses: ["Formulas", "Concept Maps"] },
    { title: "Chemistry", img: "https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png", subclasses: ["Organic", "Inorganic", "Physical"] },
    { title: "Chemistry Revision", img: "https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png", subclasses: ["Periodic Table", "Equations"] }
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="course-container">
      {courses.map((course, index) => (
        <div key={index} className="course-box">
          <div 
            className={`course-header ${openDropdown === index ? 'active' : ''}`}
            onClick={() => toggleDropdown(index)}
          >
            <img src={course.img} alt={course.title} className="course-icon" />
            <span className="course-title">{course.title}</span>
            <span className={`dropdown-icon ${openDropdown === index ? 'open' : ''}`}>▼</span>
          </div>
          
          {openDropdown === index && (
            <div className="dropdown-content">
              {course.subclasses.map((sub, subIndex) => (
                <div key={subIndex} className="dropdown-item">{sub}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Course;