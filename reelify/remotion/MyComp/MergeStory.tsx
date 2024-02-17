import { Sequence } from "remotion";
import { Story2 } from "./Story";
//import { AudioListen } from "./AudioListen";

// import story1 from './assets/story1.jpeg';
// import story2 from './assets/story2.jpeg';
// import story3 from './assets/story3.jpeg';
// import story4 from './assets/story4.jpeg';
// import story5 from './assets/story5.jpeg';
// import story6 from './assets/story6.jpeg';
// import story7 from './assets/story7.jpeg';


// import mystory1 from './assets/mystory1.jpeg';
// import mystory2 from './assets/mystory2.jpeg';
// import mystory3 from './assets/mystory3.jpeg';
// import mystory4 from './assets/mystory4.jpeg';
// import mystory5 from './assets/mystory5.jpeg';
// import mystory6 from './assets/mystory6.jpeg';
// import mystory7 from './assets/mystory7.jpeg';
// import mystory8 from './assets/mystory8.jpeg';

//export const storyImages = [story1, story2, story3, story4, story5, story6, story7];
//export const mystoryImages = [mystory1, mystory2, mystory3, mystory4, mystory5, mystory6, mystory7, mystory8];
//export const storyImages = ["story1.jpeg", "story2.jpeg", "story3.jpeg", "story4.jpeg", "story5.jpeg", "story6.jpeg", "story7.jpeg"];
export const mystoryImages = [
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/2/200/300",
  "https://picsum.photos/id/3/200/300",
  "https://picsum.photos/id/4/200/300",
  "https://picsum.photos/id/5/200/300",
  "https://picsum.photos/id/6/200/300",
  "https://picsum.photos/id/7/200/300",
  "https://picsum.photos/id/8/200/300",

]

export const mystorySentences: string[] = [
  "A young man basks in joy and laughter with family and friends, painting a picture of bliss in a sunlit town.",
  "A ghostly figure warns the young man of an impending monster, casting an eerie shadow over his idyllic life.",
  "Determined to ward off the menace, the young man retreats to relentless study, forsaking the joy that once defined him.",
  "Peering through his window, the young man watches friends celebrate without him, feeling the sting of isolation.",
  "The young man's face reflects weariness and determination as he perseveres through relentless study, embodying resilience.",
  "The young man stands triumphant, showcasing the fruits of his hard work and transformative journey.",
  "The monstrous threat fades into obscurity as the young man conquers challenges, symbolizing diminishing power.",
  "Amidst renewed joy, the young man, surrounded by loved ones, reclaims a happy and fulfilling life."
];

export const storySentences: string[] = [
  "A BAT who fell upon the ground and was caught by a Weasel pleaded to be spared his life.",
  "The Weasel refused, saying that he was by nature the enemy of all birds.",
  "The Bat assured him that he was not a bird, but a mouse, and thus was set free.",
  "Shortly afterwards the Bat again fell to the ground and was caught by another Weasel",
  "The Weasel said that he had a special hostility to mice.",
  "The Bat assured him that he was not a mouse,",
  "but a bat, and thus a second time escaped."
];

export const duration = [0, 150, 300, 450, 600, 750, 900];
export const myduration = [0, 150, 300, 450, 600, 750, 900, 1050];


export const MergeStory: React.FC<{
 
}> = () => {


  return (
    <>
    {mystoryImages.map((imgUrl, index) => (

      <Sequence key={index} from={myduration[index]} durationInFrames={150}>
        <Story2 key={index} imgUrl={imgUrl} sentence={mystorySentences[index]} />

        </Sequence>
      ))}
    

    {/* <Sequence from={0} durationInFrames={150}>
      <Story2 imgUrl={storyImages[0]} sentence={storySentences[0]}/>
    </Sequence>
    <Sequence from={150} durationInFrames={150}>
    <Story2 imgUrl={storyImages[1]} sentence={storySentences[1]}/>
    </Sequence>
    <Sequence from={300} durationInFrames={150}>
    <Story2 imgUrl={storyImages[2]} sentence={storySentences[2]}/>
    </Sequence>
    <Sequence from={450} durationInFrames={150}>
    <Story2 imgUrl={storyImages[3]} sentence={storySentences[3]}/>
    </Sequence>
    <Sequence from={600} durationInFrames={150}>
    <Story2 imgUrl={storyImages[4]} sentence={storySentences[4]}/>
    </Sequence>
    <Sequence from={750} durationInFrames={150}>
    <Story2 imgUrl={storyImages[5]} sentence={storySentences[5]}/>
    </Sequence>
    <Sequence from={900} durationInFrames={150}>
    <Story2 imgUrl={storyImages[6]} sentence={storySentences[6]}/>
    </Sequence> */}
    
    {/* <Sequence from={0} durationInFrames={1200}>
       <AudioListen></AudioListen>
    </Sequence> */}
    </>
    
  );
  //return <Img src={"hackpic.jpeg"} style={{width: COVER_SIZE }}/>; // enable for show image in dev
};