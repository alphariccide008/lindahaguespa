import React from "react";
import WhatsAppChat from "./WhatsAppChat";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <WhatsAppChat /> {/* WhatsApp Chat Button appears on all pages */}
    </div>
  );
};

export default Layout;
