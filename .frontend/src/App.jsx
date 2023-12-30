import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/dashboard/student/"));
const Details = lazy(() => import("./pages/dashboard/student/details"));

const FaqPage = lazy(() => import("./pages/dashboard/faq"));
const ContactPage = lazy(() => import("./pages/dashboard/contact"));
const EventsPage = lazy(() => import("./pages/dashboard/events"));
const ComingSoon = lazy(() => import("./pages/dashboard/coming-soon"));

const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const ForgotPass = lazy(() => import("./pages/auth/forgot-password"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
        </Route>
        <Route path="/*" element={<Layout />}>
          <Route path="details" element={<Details />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="competitions" element={<EventsPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="travel" element={<ComingSoon />} />
          <Route path="payment" element={<ComingSoon />} />
          <Route path="accomodation" element={<ComingSoon />} />
          <Route path="map" element={<ComingSoon />} />
          <Route path="certificate" element={<ComingSoon />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
