import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { FaLocationDot } from "react-icons/fa6";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { IoReorderThreeOutline } from "react-icons/io5";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Navbar = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mapRef = useRef();

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setError(null);
          setShowMap(true);
        },
        () => {
          setError("Permission denied or error fetching location");
        }
      );
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mapRef.current && !mapRef.current.contains(e.target)) {
        setShowMap(false);
      }
    };

    if (showMap) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMap]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoWrapper}>
        <FaLocationDot onClick={getLocation} className={styles.icon} />

        {error && <p className={styles.error}>{error}</p>}

        {showMap && location && (
          <div ref={mapRef} className={styles.mapPopup}>
            <MapContainer
              center={[location.lat, location.lng]}
              zoom={13}
              className={styles.mapContainer}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              />
              <Marker position={[location.lat, location.lng]}>
                <Popup>You are here</Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className={styles.mobileMenuBtn} onClick={toggleMobileMenu}>
        <IoReorderThreeOutline className={styles.hamburgerIcon} />
      </div>

      {/* Desktop Navigation */}
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? styles.active : "")}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : "")}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? styles.active : "")}>Signup</NavLink>
        </li>
      </ul>

      {/* Mobile Navigation Menu */}
      <ul className={`${styles.mobileNavLinks} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/services" 
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/signup" 
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
