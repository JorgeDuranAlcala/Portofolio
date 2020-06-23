import React, { useEffect, useState } from "react";
import { getAllContentFulData } from "../../../utils/getContentfulData";
import { Spinner } from "../..";
import { TransitionGroup } from "react-transition-group";
import Fade from "react-reveal/Fade";
import PostPreview from "../../Post/PostPreview";
import { Redirect } from "react-router-dom";
import { langContext } from "../../../Context/langContext";
import { useContext } from "react";

const styles = {
  container: {
    width: "100%",
    maxHeight: "auto",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: 'hidden',
  },
};

const Blog = () => {

  const [Data, setData] = useState([]);
  const [cargando, setCargando] = useState(true)
  const [Redirecto, setRedirecto] = useState(false)
  const [Id, setId] = useState('')
  const context = useContext(langContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getAllContentFulData("post", context)).sort((a,b) =>  {
        var c = new Date(a.sys.createdAt);
        var d = new Date(b.sys.createdAt);
        return d - c;
      } );
      setData(data);
      setCargando(false)
    };

    fetchData();
  }, [context]);

  if(cargando) {
    return (
            <div className="spin_container">
                <Spinner/>
            </div>
          )
  }

  const handleClick = id => {
      setId(id)
      setRedirecto(true)
  }


  return (
    <div style={styles.container}>
      <div className="blog_title">
        <h3>Welcome To My Blog</h3>
      </div>
      <TransitionGroup>
        <div className="grid_list">
        {/* Redirect to the article */}
        { Redirecto && <Redirect to={`/postView/${Id}`} /> }
        {/* Render All posts */}
          {Data.map((item, i) => {
            let url = 'http://picsum.photos/350/200'
            if(item.fields.thumbnail) {
                url = item.fields.thumbnail.fields.file.url
            }
            let { title, desc } = item.fields;
            const { id } = item.sys;
            let description = desc.length > 110 ? desc.slice(0, 110).concat("...") : desc;

            return (
              <Fade bottom>
                <PostPreview 
                  img={url} 
                  title={title}
                  desc={description}
                  onClick={handleClick}
                  id={id}
                />
              </Fade>
            )
          })}
        </div>
      </TransitionGroup>
    </div>
  );
};

export default Blog;
