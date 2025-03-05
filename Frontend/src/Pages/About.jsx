import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-4 text-primary">About Our Organization</h1>
          <p className="lead text-secondary">
            Empowering students through education and technology.
          </p>
        </header>

        {/* About Section */}
        <section className="row g-4">
          <div className="col-md-6">
            <img
              src="https://media.istockphoto.com/id/1148232211/photo/schoolgirl-throwing-paper-airplane-in-classroom.jpg?s=612x612&w=0&k=20&c=cawsPFsnjJezQDCLmsPTA1bNqFDqy_gUg7doTRBGHDA="
              alt="Our Mission"
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2 className="text-dark">Our Mission</h2>
              <p>
                At our organization, we are dedicated to providing top-notch
                resources and support to students. Our mission is to bridge the
                gap between education and opportunity by offering a platform for
                academic excellence and personal growth.
              </p>
              <p>
                With a focus on technology and innovation, we aim to empower
                students to achieve their goals and make a positive impact on
                society.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="my-5">
          <h2 className="text-center text-dark mb-4">Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <i className="bi bi-book fs-1 text-primary"></i>
              <h4 className="mt-3">Education</h4>
              <p>
                We believe in the transformative power of education to shape
                futures and communities.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-people fs-1 text-primary"></i>
              <h4 className="mt-3">Collaboration</h4>
              <p>
                Together, we achieve more. Collaboration is at the heart of
                everything we do.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-lightbulb fs-1 text-primary"></i>
              <h4 className="mt-3">Innovation</h4>
              <p>
                We embrace innovation to solve problems and create opportunities
                for students worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg">
            Learn More About Us
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
