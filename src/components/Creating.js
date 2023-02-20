import React from "react";

import { Outlet } from "react-router-dom";

// Find out how to make child route paths be the same as the parent
export function Creating() {
    return (
    <main>
        <div className="flexbox-container">
          <Outlet/>
        </div>
    </main>
  );
}

