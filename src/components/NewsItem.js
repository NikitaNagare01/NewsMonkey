import React from "react";

const NewsItem =(props)=> {
 
    let { title, description, imgurl, url, author, date, source } = props;
    return (
      <div>
        <div className="card my-3">
            <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
          <img src={ imgurl? imgurl: "https://assets1.cbsnewsstatic.com/hub/i/r/2017/12/01/ff8d5e82-7cc4-4e41-94bb-bec0b80ffbe2/thumbnail/1200x630/51964c1f913117c7a637b3ce86fe6ab2/van-cleave-bette-nash-2017-11-30.jpg?v=83093a0dd27502f0a52cd68b1c5b8b6e"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">Updated by {author ? author : "Unknown"} on{" "}{new Date(date).toGMTString()}</small></p>
            <a href={url} className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
