import { z } from "zod";

export const videoProps = z.object({
    videoScript: z.array(z.string()), 
    imageUrls: z.array(z.string()), 
    audioUrls: z.array(z.string()), 
  });


export type myVideoProps = {
    videoScript: string[];
    imageUrls: string[];
    audioUrls: string[];
  };
  
  export const defaultVideoProps: z.infer<typeof videoProps> = {
    "videoScript": [
        "Dinosaurs are a diverse group of reptiles belonging to the clade Dinosauria.",
        "They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of their evolution is still under active research.",
        "After the Triassic-Jurassic extinction event around 201.3 million years ago, dinosaurs became the dominant terrestrial vertebrates.",
        "Their dominance continued throughout the Jurassic and Cretaceous periods.",
        "The fossil record shows that birds are feathered dinosaurs, originating from earlier theropods during the Late Jurassic epoch.",
        "Birds are the only dinosaur lineage known to have survived the Cretaceous-Paleogene extinction event around 66 million years ago.",
        
    ],
    "imageUrls": [
        "http://10.100.161.49:3000/api/get-image/dino0.jpg",
        "http://10.100.161.49:3000/api/get-image/dino1.jpg",
        "http://10.100.161.49:3000/api/get-image/dino2.jpg",
        "http://10.100.161.49:3000/api/get-image/dino3.jpg",
        "http://10.100.161.49:3000/api/get-image/dino4.jpg",
        "http://10.100.161.49:3000/api/get-image/dino5.jpg",
        
      
    ],
    "audioUrls": [
        "http://10.100.161.49:3000/api/get-speech/dino0.mp3",
        "http://10.100.161.49:3000/api/get-speech/dino1.mp3",
        "http://10.100.161.49:3000/api/get-speech/dino2.mp3",
        "http://10.100.161.49:3000/api/get-speech/dino3.mp3",
        "http://10.100.161.49:3000/api/get-speech/dino4.mp3",
        "http://10.100.161.49:3000/api/get-speech/dino5.mp3",
       
    ]
  };

  export const scripts =  [
    "Dinosaurs are a diverse group of reptiles belonging to the clade Dinosauria.",
    "They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of their evolution is still under active research.",
    "After the Triassic-Jurassic extinction event around 201.3 million years ago, dinosaurs became the dominant terrestrial vertebrates.",
    "Their dominance continued throughout the Jurassic and Cretaceous periods.",
    "The fossil record shows that birds are feathered dinosaurs, originating from earlier theropods during the Late Jurassic epoch.",
    "Birds are the only dinosaur lineage known to have survived the Cretaceous-Paleogene extinction event around 66 million years ago.",
    
];

  export const images = [
    "http://10.100.161.49:3000/api/get-image/dino0.jpg",
    "http://10.100.161.49:3000/api/get-image/dino1.jpg",
    "http://10.100.161.49:3000/api/get-image/dino2.jpg",
    "http://10.100.161.49:3000/api/get-image/dino3.jpg",
    "http://10.100.161.49:3000/api/get-image/dino4.jpg",
    "http://10.100.161.49:3000/api/get-image/dino5.jpg",
  ];

  export const audioes = [
    "http://10.100.161.49:3000/api/get-speech/dino0.mp3",
    "http://10.100.161.49:3000/api/get-speech/dino1.mp3",
    "http://10.100.161.49:3000/api/get-speech/dino2.mp3",
    "http://10.100.161.49:3000/api/get-speech/dino3.mp3",
    "http://10.100.161.49:3000/api/get-speech/dino4.mp3",
    "http://10.100.161.49:3000/api/get-speech/dino5.mp3",
  ];

  
  