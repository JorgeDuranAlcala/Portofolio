import React, { useEffect, useState } from "react";
import { getContentById } from "../../../utils/getContentfulData";
import { useParams } from "react-router-dom";
import { Article, Spinner } from "../../index.js";
import Disqus from "disqus-react";
import Zoom from "react-reveal/Zoom";
import Icon from "../../Icon/Icon";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import profile from "../../../assets/img/profile1.jpg";
import { useContext } from "react";
import { langContext } from "../../../Context/langContext";
import { Link } from "react-router-dom";

const PostView = () => {
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [cargando, setCargando] = useState(true);
  const locale = useContext(langContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContentById(id, locale);
      setArticle(data);
      setCargando(false);
    };

    fetchData();
  }, [id, locale]);

  if (cargando) {
    return (
      <div className="spin_container">
        <Spinner />
      </div>
    );
  }

  const { content, title } = article;

  const disqusShortName = "jorgeduran";
  const disqusConfig = {
    url: `/postView/${id}`,
    identifier: id,
    title,
  };

  return (
    <div className="blog_view">
      <Link to="/blog">
        <Icon icon={faChevronCircleLeft} cls="blog_view_icon" color="black" />
      </Link>
      <Zoom>
        <Article content={content} />
      </Zoom>
      <Zoom>
        <div className="blog_writeBy">
          <div className="data">
            <div className="profile_img">
              <img src={profile} alt="profile" />
            </div>
            <div className="about_writter">
              <h6>Written by</h6>
              <h5>Jorge Duran</h5>
              <p>Full Stack developer, and Web Designer</p>
            </div>
          </div>
        </div>

        <div className="blog_comments">
          <Disqus.DiscussionEmbed
            shortname={disqusShortName}
            config={disqusConfig}
          />
        </div>
      </Zoom>
    </div>
  );
};

export default PostView;
