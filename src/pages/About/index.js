import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      
      <div className="about-me">
        <div>
          <img
            src={coverImage}
            className="my-2 pic float-left"
            style={{ width: "25%" }}
            alt="cover"
          />
        </div>
        <h1 id="about">Meet Christian</h1>
        <p className="bio">
          Christian Rockwood is a hardworking, organized, and driven person who
          thrives in collaborative work spaces. Fresh out of the University of
          Ricmond Full Stack Coding Bootcamp, Christian is excited to apply her
          web development skills and continue learning. For the last seven years
          she has been a teacher in Richmond Public Schools in Virginia. During
          this time she held many leadership roles, such as, lead Language Arts
          teacher, grade level chair, community and culture committee member,
          school leadership committee member, and she has also been on multiple
          hiring panels for administration. Being a proud VCU Ram has also given
          her the opportunity to mentor future teachers from VCU as well as
          other local universities. In 2019, she was honored by her colleagues
          by being nominated as Teacher of the Year. She has a love for
          education in every facet of life, which led her to web development.
          Currently Christian is the Technology Manager for Mo Life Media LLC.
        </p>
      </div>
    </section>
  );
}

export default About;
