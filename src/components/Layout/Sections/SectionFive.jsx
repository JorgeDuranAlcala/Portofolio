import React, { useEffect, useState, useContext } from "react";
import { getContentfulData } from "../../../utils/getContentfulData";
import Post from "../../Post/Post";
import TransitonGroup from "react-transition-group/TransitionGroup";
import Fade from "react-reveal/Fade";
import { langContext } from "../../../Context/langContext.js";
import { Link } from 'react-router-dom';

const SectionFive = () => {
  const [Articles, setArticles] = useState([]);
  const lang = useContext(langContext)
  useEffect(() => {


    const fetchContData = async () => {
      try {
        const articles = await getContentfulData("post", 3, lang);
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContData();
  }, [lang]);

  return (
    <div>
      <section className="post_section">
        <h3 className="post_subtitle">Most Recent Post</h3>
        <TransitonGroup>
          <div className="post_list">
            {Articles &&
              Articles.map((item, i) => {
                let url = "http://picsum.photos/350/200";
                if (item.fields.thumbnail) {
                  url = item.fields.thumbnail.fields.file.url;
                }
                const { title, desc } = item.fields;
                let description =
                  desc.length > 110 ? desc.slice(0, 110).concat("...") : desc;
                return (
                  <Fade down>
                    <Post
                      title={title}
                      desc={description}
                      cls="my_card"
                      link="/blog"
                      style={{ marginBottom: "15vmin" }}
                      key={i}
                      url={url}
                      Is="post"
                    />
                  </Fade>
                );
              })}
          </div>
        </TransitonGroup>
        <Link to="/blog" className="btn my-4"> See All Posts </Link>
      </section>
    </div>
  );
};

export default SectionFive;
