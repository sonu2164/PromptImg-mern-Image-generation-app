import React from 'react'
import { Configuration, OpenAIApi } from "openai";




const configuration = new Configuration({
    organization: "org-lszfNqnmycCbSzoevu4z12Oh",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

const Temp = () => {

const handleClick=async ()=>{
    const response = await openai.createImage({
        prompt: "A cute baby sea otter",
        n: 2,
        size: "1024x1024",
    
      });
      console.log("response:", response)

   

}


  return (
    <div>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Temp