import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalresult, settotalresult] = useState(0);



  const updatenews= async()=>{

      props.setprogress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
      setloading(true);
      let data = await fetch(url);
      props.setprogress(30);
      data = await data.json();
      props.setprogress(70);
      setarticle(data.articles);
      settotalresult(data.totalResults);
      setloading(false);
      props.setprogress(100);
  }

 const capitalizafirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(()=>{
    document.title = `${capitalizafirstletter(props.category)} - NewsMonkey`;
    updatenews();
  },[])







  const fetchMoreData=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
    setpage(page+1);
    setloading(true);
    let data = await fetch(url);
    data = await data.json();
    setarticle(article.concat(data.articles));
    settotalresult(data.totalResults);
    setloading(false);
  }



    return (
      <>
          {props.home==="home" && 
          <img src="https://hlta.org.uk/wp-content/uploads/2022/09/News-1024x461.jpeg" className="full-width"/>
          }

        <h1 className="text-center " style={{marginTop:'80px'}}>
          NewsMonkey - {capitalizafirstletter(props.category)}{" "}
          Articles
        </h1>

        {loading && page===1 && <Spinner/>}

        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalresult}
          loader={loading &&<Spinner/>}
        >
            <div className="container">
                <div className="row my-3">
                    {/* {!this.state.loading && this.state.article.map((Element)=>{ */}
                    {article.map((Element) => {
                    return (
                        <div className="col-md-3" key={Element.url}>
                        <NewsItem title={Element.title ? Element.title.slice(0, 45) : ""}   description={Element.description ? Element.description.slice(0, 88): ""} imgurl={Element.urlToImage} url={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name}/>
                        </div>
                    );
                    })}
                </div>
          </div>
        </InfiniteScroll>






        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} onClick={this.honcliprev} type="button" className="btn btn-dark">&larr; Previous</button>
          <button disabled={this.state.page + 1 >Math.ceil(this.state.totalresult / props.pagesize) } onClick={this.honclinext} type="button"className="btn btn-dark">Next &rarr;</button>
        </div> */}
      </>
    );

}


News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "general",
};

News.propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string
}

export default News;
