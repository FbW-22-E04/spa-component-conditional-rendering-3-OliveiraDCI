import React from "react";
import Alert from "./Alert";
export default function App() {
  return (
    <div>
      <Alert show={true} text="True primary alert!" />
      <Alert show={false} text="False primary alert!" />
    </div>
  );
}
