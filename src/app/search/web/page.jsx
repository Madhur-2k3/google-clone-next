import React from "react";
export default async function WebSearchPage({searchParams}) {

    // console.log('before res')
    // const response=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}
    // &cx=${process.env.CONTEXT_KEY}&q=lectures`);
    const response=await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyAbWZJcQgOHDi5TgRkrk26nqNm-MgBZiQQ&cx=878a73e23f718457f&q=${searchParams.searchTerm}`
    )
    const data=await response.json();
    const results=data.items;
    // console.log(results);
    // console.log("after result")

  return (
    <div>{results && results.map((result)=><h1>{result.title}</h1>)}
    </div>
  )
}
