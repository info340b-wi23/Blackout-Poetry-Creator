import React from "react";

import { UploadTab, BlackoutTab, FinalizingTab } from "./CreatingSideTabs.js";
import { BlackoutPreview, UploadingPreview, FinalizingPreview } from "./CreatingPreview.js";

export function CreatingUpload() {
  return (
    <main>
        <div className="flexbox-container">
            <UploadTab />
            <UploadingPreview />
        </div>
    </main>
  );
}

export function CreatingBlackout() {
  return (
    <main>
        <div className="flexbox-container">
            <BlackoutTab />
            <BlackoutPreview/>
        </div>
    </main>
  );
}


export function CreatingFinalizing() {
  return (
    <main>
        <div className="flexbox-container">
            <FinalizingTab />
            <FinalizingPreview/>
        </div>
    </main>
  );
}

