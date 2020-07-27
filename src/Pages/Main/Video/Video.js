import React, { Component } from "react";
import "./Video.scss";

class Video extends Component {
  state = {
    isVideo: false,
  };
  handleVideo = () => {
    this.setState({
      isVideo: true,
    });
  };

  render() {
    const { isVideo } = this.state;
    const { handleVideo } = this;

    return (
      <div>
        <div className="Video">
          <h1 className="videoTitle">
            LA ROCHE-POSAY MOVIE
            <p class="videoSubTitle">영상으로 만나는 라로슈포제</p>
          </h1>
          <div>
            {isVideo ? (
              <iframe
                className={isVideo ? "youtubeVideo" : "displayNone"}
                src="https://www.youtube.com/embed/iTSuWdwI_Xs?autoplay=1&amp;loop=1&amp;rel=0&amp;controls=0&amp;showinfo=1&amp;modestbranding=1"
                frameborder="0"
                allowfullscreen=""
                title="LA ROCHE-POSAY"
              ></iframe>
            ) : (
              <img
                className={isVideo ? "displayNone" : "youtubeImage"}
                alt="영상실행"
                src="https://www.larocheposay.co.kr/upload/site/main/2020/04/20200409_1747041_253.jpg"
                onClick={handleVideo}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
