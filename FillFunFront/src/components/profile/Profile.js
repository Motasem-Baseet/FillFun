import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileSidebar = ({ name, email }) => (
  <div className="col-md-3">
    <div className="card">
      <div className="card-header bg-white text-center">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar3.png"
          alt=""
          className="rounded-circle mb-3"
          width="100"
        />
        <h5 className="mb-0">{name || "Loading..."}</h5>
        <p className="mb-0">{email || "Loading..."}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item active">
          <a href="#" className="text-decoration-none text-dark">
            <i className="fa fa-user me-2"></i> Profile
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" className="text-decoration-none text-dark">
            <i className="fa fa-calendar me-2"></i> Recent Activity
            <span className="badge bg-warning float-end">9</span>
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" className="text-decoration-none text-dark">
            <i className="fa fa-edit me-2"></i> Edit Profile
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const ProfileContent = ({ name, email, password }) => (
  <div className="col-md-9">
    <div className="card mb-4">
      <div className="card-header bg-warning text-white text-center">
        <p className="mb-0">
          Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut
          vel ispum.
        </p>
      </div>
      <div className="card-body">
        <h5 className="card-title">Bio Graph</h5>
        <div className="row">
          <div className="col-md-6">
            <strong>Name:</strong> {name || "Loading..."}
          </div>
          <div className="col-md-6">
            <strong>Email:</strong> {email || "Loading..."}
          </div>
          <div className="col-md-6">
            <strong>Password:</strong> {password || "Loading..."}
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <ProjectProgressCard
        progress="35%"
        title="Envato Website"
        started="15 July"
        deadline="15 August"
      />
      {/* Add more <ProjectProgressCard /> as needed */}
    </div>
  </div>
);

const ProjectProgressCard = ({ progress, title, started, deadline }) => (
  <div className="col-md-6 mb-4">
    <div className="card p-2">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0 me-3">
            <div className="progress-circle d-flex align-items-center justify-content-center rounded-circle">
              <strong>{progress}</strong>
            </div>
          </div>
          <div>
            <h6 className="mb-1 text-warning">{title}</h6>
            <small>Started: {started}</small>
            <br />
            <small>Deadline: {deadline}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // Replace '1' with the dynamic user ID you want to fetch
    const userId = 1;

    axios
      .get(`http://your-laravel-backend-url/api/profile/${userId}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  return (
    <div className="bg-light">
      <div className="page-title dark-background" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Boards Page</h1>
                <p className="mb-0">
                  Explore engaging trivia boards packed with exciting
                  questions—test your knowledge and challenge yourself
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Starter Page</li>
            </ol>
          </div>
        </nav>
      </div>
      <div className="container mt-4">
        <div className="row">
          <ProfileSidebar name={profile.name} email={profile.email} />
          <ProfileContent
            name={profile.name}
            email={profile.email}
            password={profile.password}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
