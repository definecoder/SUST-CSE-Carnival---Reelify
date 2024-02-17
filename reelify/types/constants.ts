import { z } from "zod";
export const COMP_NAME = "MyComp";

export const CompositionProps = z.object({
  title: z.string(),
});

export const defaultMyCompProps: z.infer<typeof CompositionProps> = {
  title: "SUST Define Coders",
};

export const DURATION_IN_FRAMES = 100;
export const VIDEO_WIDTH = 473;
export const VIDEO_HEIGHT = 837;
export const VIDEO_FPS = 30;
