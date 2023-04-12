import React, {useState} from "react";
import memesData from "../memesData.js";

export default function Meme()
{
   const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes);

   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
   });

   function changeImage()
   {   
      event.preventDefault();
      const memesArray = memesData.data.memes;
      const image = memesArray[Math.floor(Math.random() * memesArray.length)].url;

      setMeme(prevMeme => ({
         ...prevMeme,
         randomImage: image
      }));
   }

   return(
      <main>
         <form className="form">
            <input className="form-input" placeholder="Top text" type="text"/>
            <input className="form-input" placeholder="Bottom text" type="text"/>

            <button onClick={changeImage} className="form-button">Get a new meme image 🖼️</button>
         </form>

         <img className="image-result" src={meme.randomImage} ></img>
      </main>
   )
}