import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
