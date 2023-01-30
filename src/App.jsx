import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./components/Buy/Booking";
import BuyListings from "./components/Buy/BuyListings";
import ExchangeListings from "./components/Exchange/ExchangeListings";
import ErrorPage from "./components/Generic/ErrorPage";
import Subscription from "./components/Generic/Subscription";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import PropertyPage from "./components/Listings/PropertyPage";
import Blogs from "./components/NewsInsights/Blogs";
import { AuthProvider } from "./components/PfpManagement/AuthProvider";
import Login from "./components/PfpManagement/Login";
import ProfileSettings from "./components/PfpManagement/ProfileSettings";
import RequireAuth from "./components/PfpManagement/RequireAuth";
import SignUp from "./components/PfpManagement/SignUp";
import RentListings from "./components/Rent/RentListings";

function App() {
  return (
    <MantineProvider theme={{ fontFamily: "Poppins" }}>
      <NotificationsProvider>
        <AuthProvider>
          <div
            className="App"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Router>
              <Navbar />
              <main style={{ flex: 1 }}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Hero />} />
                  <Route path="/property/:id" element={<PropertyPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<SignUp />} />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/properties" element={<BuyListings />} />
                  <Route path="/exchange" element={<ExchangeListings />} />
                  <Route path="/rent" element={<RentListings />} />
                  {/* Routes to Protect */}
                  <Route element={<RequireAuth />}>
                    <Route path="/booking/:id" element={<Booking />} />
                    <Route path="/profile/:id" element={<ProfileSettings />} />
                  </Route>
                  {/* 404 Page */}
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
              </main>
              <Footer />
            </Router>
          </div>
        </AuthProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
