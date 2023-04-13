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

   console.log(meme);

   function changeHandler(event)
   {
      const {value, name} = event.target;

      setMeme(prevMeme => {
         return {
            ...prevMeme,
            [name]: value
         }
      });
   }

   return(
      <main>
         <form className="form">
            <input
               className="form-input"
               placeholder="Top text"
               type="text"
               name="topText"
               value={meme.topText}
               onChange={changeHandler}
            />
            
            <input
               className="form-input"
               placeholder="Bottom text"
               type="text"
               name="bottomText"
               value={meme.bottomText}
               onChange={changeHandler}
            />

            <button
               onClick={changeImage}
               className="form-button"
            >
               Get a new meme image 🖼️
            </button>
         </form>

         <div className="meme">
            <img src={meme.randomImage} className="meme-image" />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
         </div>
      </main>
   )
}