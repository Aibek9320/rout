import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex", padding: "15px 0",justifyContent: 'center', background: '#999' }}>
      <div style={{display: 'flex', gap: '15px'}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/contacts"}>Contacts</Link>
      </div>
    </div>
  );
};

export default Header;
