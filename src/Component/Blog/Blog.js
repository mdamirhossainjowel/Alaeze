import React from "react";

const Blog = () => {
  return (
    <section className="grid grid-cols-1 gap-4 mb-10 mx-20 mt-10">
      <h1 className="text-3xl">Q1. What is Context Api?</h1>
      <p className="text-xl">
        Props drilling is massy method to handle data now a days but context api
        is here to came out this prblem. Context Api is an alternative of Props
        Drilling.it is not require to send data through props.It pass the data
        through the component tree. It Could be call from any other js file. And
        interesting part is it can be modified from differnt file.For create
        context api need to call createContext method.For use this need to call
        provider method.
      </p>
      <h1 className="text-3xl">Q2. What is Semantic Tag?</h1>
      <p className="text-xl">
        We all know that what html stands for.In early stage there was no update
        module to handle and effiecient this langguage to use.Day by day there
        was lot of change are happening. The new developer wants to make this
        langguage more effient ,easy to use,looking standard and the they are
        doing well. Semantic tag is one of them.Semantic tag elements are those
        that clearly describe their meaning in human and machine readable way
        and which are easier to understand to others and make the web look
        nicer.
      </p>
    </section>
  );
};

export default Blog;
