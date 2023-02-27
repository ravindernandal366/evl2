import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard.jsx";
import SearchResults from "../Components/SearchResults.jsx";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
}
