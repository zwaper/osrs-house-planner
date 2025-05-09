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
    version: "1.1.0",
    releaseDate: "May 9, 2025",
    updateNotes: [
      {
        title: "Image Fixes & Version Tracking",
        description: "Fixed image loading issues and added version information display",
        features: [
          "Fixed 404 errors for game icons",
          "Added version tracking system",
          "Improved image path handling with base URL",
          "Enhanced UI accessibility"
        ]
      }
    ]
  };
  
  // Move the current version to history
  export const versionHistory: VersionInfo[] = [
    {
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
    }
  ];