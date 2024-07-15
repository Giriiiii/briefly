import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        
       <h1 className="logo__fr">BRIEFLY.</h1>
        
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Your shortcut to clear, concise article summaries. Simplifying complex content for faster insights.
      </h2>
    </header>
  );
};

export default Hero;
