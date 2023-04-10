import React, {useState} from "react";
import memesData from "../memesData.js";

export default function Meme()
{
   const [memeUrl, changeMemeUrl] = useState(0);

   function pure()
   {   
      event.preventDefault()
      const memesArray = memesData.data.memes;
      const image = memesArray[Math.floor(Math.random() * memesArray.length)].url;

      changeMemeUrl(image);
   }

   return(
      <main>
         <form className="form">
            <input className="form-input" placeholder="Top text" type="text"/>
            <input className="form-input" placeholder="Bottom text" type="text"/>

            <button onClick={pure} className="form-button">Get a new meme image 🖼️</button>
         </form>

         <img className="image-result" src={memeUrl} ></img>
      </main>
   )
}