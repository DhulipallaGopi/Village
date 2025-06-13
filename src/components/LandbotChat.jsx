import React, { useState } from "react";
import "./LandbotChat.css";

const LandbotChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => {
    if (!window.myLandbot) {
      window.myLandbot = new window.Landbot.Livechat({
        configUrl:
          "https://storage.googleapis.com/landbot.online/v3/H-2982349-RSLUT5AHIHE0J3J4/index.json",
      });
    }
    setIsOpen(true);
  };

  return (
    <>
      {!isOpen && (
        <div className="chat-bubble" onClick={openChat}>
            <h6 style={{ color: "blue" }}>⚙️</h6>
        </div>
      )}
    </>
  );
};

export default LandbotChat;
