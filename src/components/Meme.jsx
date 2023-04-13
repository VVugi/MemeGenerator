import React, {useEffect, useState} from "react";

export default function Meme()
{
   const [allMemes, setAllMemes] = useState({
      id: "",
      name: "",
      url: "",
      width: "",
      height: "",
      box_count: ""
   });

   const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
   });

   useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes));
   }, []);

   function changeImage()
   {   
      event.preventDefault();
      const image = allMemes[Math.floor(Math.random() * allMemes.length)].url;

      setMeme(prevMeme => ({
         ...prevMeme,
         randomImage: image
      }));
   }

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