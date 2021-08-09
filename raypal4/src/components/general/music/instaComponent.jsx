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
        '{{customTagOpen}}<div class="col s12 m4 l4"><div class="card"><div class="video-container"><video preload="none" poster={{image}} width="100%" controls loop><source src={{model.media_url}} type="video/mp4" /></video></div><div class="card-content"><span class="card-title">{{caption}}</span></div><div class="card-action"><a href={{link}}>View on Instagram</a></div></div></div>',
    });
    feed.run();
  }

  render() {
    return (
      <div className="inner-container">
        <div id="instafeed">
          <div className="row">
            <div className="col s12 m12 l12">
              <h1>Piano Covers ~</h1>
              <p className="feed-subtitle">
                A mini component using instafeed.js to pull out instagram video
                feed. Pardon the latency, still trying to improve it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InstaComponent;
