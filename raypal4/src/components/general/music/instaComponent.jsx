import React, { Component } from "react";
import Instafeed from "instafeed.js";
import "./instaComponent.css";

class InstaComponent extends Component {
  componentDidMount() {
    var count = 0;
    var feed = new Instafeed({
      sortBy: "most-liked",
      accessToken:
        "IGQVJXdHlTOWNNR3EzbXRydWVyLTZAPakZAQcEI3M1NaY1ZAHWHFja0l6clhQaW1OcjcwbWkxTlA3SjNIWjcwbW5uelBMQkxFMFdQYlVLVlM2LUdFckdNczByZAmRRdmcxRWFnUm1fZA3Bn",

      filter: function (image) {
        console.log(image);
        if (image.type === "video") {
          count += 1;
          if (count == 1) {
            image.customTagOpen = '<div class="row">';
          }
          return true;
        } else {
          return false;
        }
      },
      template:
        '{{customTagOpen}}<div class="col s12 m4 l4"><h6>{{caption}}</h6><a href={{link}}>Watch from Instagram</a><div class="video-container"><video width="100%" height="200px" controls loop><source src={{model.media_url}} type="video/mp4"/></video></div></div>',
    });
    feed.run();
  }

  render() {
    return (
      <React.Fragment>
        <div id="instafeed" className="feed-container">
          <h1>Piano Covers ~</h1>
          <p className="feed-subtitle">
            A mini component using instafeed.js to pull out instagram video
            feed. Pardon the latency, still trying to improve it.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default InstaComponent;
