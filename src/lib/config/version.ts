export interface VersionInfo {
    version: string;
    releaseDate: string;
    updateNotes: {
      title: string;
      description: string;
      features?: string[];
    }[];
  }
  
  export const currentVersion: VersionInfo = {
    version: "1.0.0",
    releaseDate: "May 9, 2025",
    updateNotes: [
      {
        title: "Initial Release",
        description: "First public release of OSRS House Planner",
        features: [
          "Room placement and rotation",
          "Furniture selection",
          "Multiple floor support",
          "Save/load house designs"
        ]
      }
    ]
  };
  
  // Store previous versions for changelog history
  export const versionHistory: VersionInfo[] = [
    // When you update, move the previous currentVersion here
  ];