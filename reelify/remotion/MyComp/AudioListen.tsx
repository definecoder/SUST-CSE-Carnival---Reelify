import { AbsoluteFill, Audio, staticFile } from 'remotion';

export const AudioListen = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile('motivational.mp3')} />
    </AbsoluteFill>
  );
};