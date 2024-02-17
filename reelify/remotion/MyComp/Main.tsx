import { z } from "zod";
import {
  AbsoluteFill,
  Sequence,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CompositionProps } from "../../types/constants";
import { loadFont, fontFamily } from "@remotion/google-fonts/Inter";
import React, { useMemo } from "react";
import { TextFade } from "./TextFade";

loadFont();

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  
  // const frame = useCurrentFrame();
  // const { fps } = useVideoConfig();

  // const logoOut = spring({
  //   fps,
  //   frame,
  //   config: {
  //     damping: 200,
  //   },
  //   durationInFrames: transitionDuration,
  //   delay: transitionStart,
  // });

  return (
    <AbsoluteFill style={{backgroundColor: "white"}}>
      <Sequence from={0}>
        <TextFade>
          <h1 className="font-arial text-9xl">{title}</h1>
        </TextFade>
      </Sequence>    
    </AbsoluteFill>
  );
};
