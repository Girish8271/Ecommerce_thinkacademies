import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-4 text-primary">
            Welcome to the Students Dashboard
          </h1>
          <p className="lead text-secondary">
            Manage and view student details with ease.
          </p>
        </header>

        {/* Featured Section */}
        <section className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://cdn.dribbble.com/users/7452538/screenshots/20372233/media/d3ba643d11d3ce1fa3feeeae25b0ca26.jpg?resize=400x300&vertical=center"
                className="card-img-top"
                alt="Student Profiles"
              />
              <div className="card-body">
                <h5 className="card-title">Student Profiles</h5>
                <p className="card-text">
                  Access detailed profiles of all students, including their
                  academic records and contact information.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://marketplace.canva.com/EAGCukL-XWc/1/0/1600w/canva-blue-and-green-colorful-brushstrokes-class-schedule-vGId5bpO6gU.jpg"
                className="card-img-top"
                alt="Classroom"
              />
              <div className="card-body">
                <h5 className="card-title">Class Schedules</h5>
                <p className="card-text">
                  View and manage classroom schedules, timetables, and
                  attendance records.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm">
              <img
                src="https://cdn.dribbble.com/userupload/10508165/file/original-e336149e500e61d447d1049e873aaf39.png?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center"
                className="card-img-top"
                alt="Reports"
              />
              <div className="card-body">
                <h5 className="card-title">Performance Reports</h5>
                <p className="card-text">
                  Analyze the performance of students with detailed progress
                  reports and analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Home;
