import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../Hero";
import InterviewPage from "../InterviewPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/interview" element={<InterviewPage />} />
    </Routes>
  );
};

export default AllRoutes;
