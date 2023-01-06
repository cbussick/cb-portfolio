import { Link } from "@mui/material";
import { Project, ProjectThumbnailType } from "../../../interfaces/Project";
import bpmTapper from "../../../resources/bpm-tapper.png";
import portfolio from "../../../resources/portfolio-website.png";
import vbsLogo from "../../../resources/vbs-logo.svg";
import vrOfficeExercisesFarm from "../../../resources/vr-office-exercises-farm.png";

const whWebsite = "https://www.w-hs.de/";

export const projects: Project[] = [
  {
    id: "vr-office-exercises",
    name: "VR Office Exercises",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: vrOfficeExercisesFarm,
    url: "https://www.youtube.com/watch?v=L4YNOIWra-A",
    description: (
      <>
        Physical inactivity is a major cause of mortality worldwide. But
        motivating yourself to get up and exercise can often be hard. How about
        you put on a VR headset and do meaningful tasks in a virtual world while
        also doing exercise in the real world? For this reason I developed the
        VR Office Exercises as part of my bachelor thesis at the{" "}
        <Link href={whWebsite} target="_blank">
          WH
        </Link>
        . The player finds himself on a farm, helping an elderly farmer with
        harvesting and other tasks.
      </>
    ),
    techStack: ["Unreal Engine", "Blueprints", "Meta Quest 2"],
  },
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
        <Link href={whWebsite} target="_blank">
          WH
        </Link>{" "}
        as part of our respective curricula. It features a rhythm-based game
        mode with multiple difficulties, progress recording and character
        customization.
      </>
    ),
    techStack: ["Unreal Engine", "Blueprints", "Meta Quest"],
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
  {
    id: "my-website",
    name: "My Website",
    thumbnailType: ProjectThumbnailType.Image,
    thumbnail: portfolio,
    description: (
      <>
        The website you are currently on! It serves as my digital portfolio 🚀
      </>
    ),
    techStack: ["React", "TypeScript", "Material UI"],
  },
];
