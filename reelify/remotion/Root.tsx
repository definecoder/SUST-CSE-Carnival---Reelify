import { Composition } from "remotion";
import { Main } from "./MyComp/Main";
import {
  COMP_NAME,
  defaultMyCompProps,
  DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../types/constants";

import { scripts, images, audioes } from "../types/videoprops";
import { NextLogo } from "./MyComp/NextLogo";
import { StoryWithReq } from "./MyComp/StoryWithReq";
import { MergeStory } from "./MyComp/MergeStory";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id={COMP_NAME}
        component={Main}
        durationInFrames={DURATION_IN_FRAMES}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={defaultMyCompProps}
      />
      <Composition
        id="myReel"
        component={NextLogo}
        durationInFrames={300}
        fps={30}
        width={140}
        height={140}
        defaultProps={{
          outProgress: 0,
        }}
      />
    
      <Composition
        id="StoryWithReq"
        component={StoryWithReq}
        durationInFrames={900}
        fps={30}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={{
          videoScript: scripts,
          imageUrls: images,
          audioUrls: audioes
        }}
      />
    </>
  );
};
