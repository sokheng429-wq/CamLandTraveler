import "./Header.css";

import {
  Home,
  Upload,
  Map,
  MessageCircle,
  User,
  LogIn,
  UserPlus,
} from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-box">
            Cl
          </div>

          <h1 className="logo-title">
            CamLand
          </h1>
        </div>

        {/* Navigation */}
        <nav className="nav-menu">

          <button className="nav-btn">
            <Home size={20} />
            <span>Newsfeed</span>
          </button>

          <button className="nav-btn">
            <Upload size={20} />
            <span>Upload</span>
          </button>

          <button className="nav-btn">
            <Map size={20} />
            <span>Map</span>
          </button>

          <button className="nav-btn">
            <MessageCircle size={20} />
            <span>Comments</span>
          </button>

        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">

          <button className="login-btn">
            <LogIn size={18} />
            Login
          </button>

          <button className="register-btn">
            <UserPlus size={18} />
            Register
          </button>

          {/* Profile */}
          <div className="profile-icon">
            <User size={18} />
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;