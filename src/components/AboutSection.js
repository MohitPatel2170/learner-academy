import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    const features = [
        {
          img: "https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png",
          alt: "Personalized learning",
          title: "Personalized learning",
          description:
            "Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning."
        },
        {
          img: "https://cdn.kastatic.org/images/lohp/trusted_content_icon.png",
          alt: "Trusted content",
          title: "Trusted content",
          description:
            "Created by experts, Khan Academy’s library of trusted, standards-aligned practice and lessons covers math K–12"
        },
        {
          img: "https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png",
          alt: "Tools to empower teachers",
          title: "Tools to empower teachers",
          description:
            "With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student."
        }
      ];
    

    return (
        <section className="why-khan-academy">
          <h1>Why Khan Academy works</h1>
          <div className="features">
            {features.map((feature, index) => (
              <div className="feature" key={index}>
                <img src={feature.img} alt={feature.alt} />
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
    };
    

export default AboutSection;