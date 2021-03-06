import { Link } from "@mui/material";
import React from "react";
import { cbContactInformation } from "../../../data/cbContactInformation";
import { Project, ProjectThumbnailType } from "../../../interfaces/Project";
import bpmTapper from "../../../resources/bpm-tapper.png";
import portfolio from "../../../resources/portfolio-website.png";
import vbsLogo from "../../../resources/vbs-logo.svg";

export const projects: Project[] = [
  {
    id: "virtual-boxing-simulator",
    name: "Virtual Boxing Simulator",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: vbsLogo,
    url: "https://www.youtube.com/watch?v=3zIW1LwYYDQ",
    description: (
      <>
        A game simulating the sport of boxing in virtual reality. This project
        was made by our group of 6 students from the{" "}
        <Link href="https://www.w-hs.de/" target="_blank">
          WH
        </Link>{" "}
        as part of our respective curricula. It features a rhythm-based game
        mode with multiple difficulties, progress recording and character
        customization.
      </>
    ),
    techStack: ["Unreal Engine", "Blueprints", "Oculus Quest"],
  },
  {
    id: "my-website",
    name: "My Website",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: portfolio,
    url: cbContactInformation.website,
    description: (
      <>
        The website you are currently on! It serves as my digital portfolio 🚀
      </>
    ),
    techStack: ["React", "TypeScript", "Material UI"],
  },
  {
    id: "bpm-tapper",
    name: "BPM Tapper",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: bpmTapper,
    url: "https://cbussick.github.io/bpm-tapper",
    description: (
      <>
        A bpm tapper is a tool used in music production to figure out the tempo
        of a song, measured in beats per minute (bpm). The tool is usually part
        of a{" "}
        <Link
          href="https://en.wikipedia.org/wiki/Digital_audio_workstation"
          target="_blank"
        >
          DAW
        </Link>
        , installed on a computer. This project is meant to make the tool
        browser-based.
      </>
    ),
    techStack: ["React", "TypeScript", "Chakra UI"],
  },
];
