import React from "react";

import Project from "../Project/Project";

import "./MyWork.scss";

import imageGradientGenerator from "../../images/gradient-generator.png";

export default function MyWork() {
  return (
    <div className="MyWork">
      <h1 className="MyWork--heading">
        My <span className="MyWork--text-secondaryColor">Work</span>
      </h1>
      <h2 className="MyWork--subHeading">Check out some of my projects...</h2>
      <div className="MyWork--main">
        <Project
          projectID="gradientGenerator"
          heading="Gradient Generator"
          description="A Linear Gradient Generator."
          image={imageGradientGenerator}
          liveLink={"https://asjadjawed.github.io/gradient-generator/"}
          sourceLink={"https://github.com/asjadjawed/gradient-generator"}
        />

        <Project
          projectID="gradientGenerator"
          heading="Gradient Generator"
          description="A Linear Gradient Generator."
          image={imageGradientGenerator}
          liveLink={"https://asjadjawed.github.io/gradient-generator/"}
          sourceLink={"https://github.com/asjadjawed/gradient-generator"}
        />

        <Project
          projectID="gradientGenerator"
          heading="Gradient Generator"
          description="A Linear Gradient Generator."
          image={imageGradientGenerator}
          liveLink={"https://asjadjawed.github.io/gradient-generator/"}
          sourceLink={"https://github.com/asjadjawed/gradient-generator"}
        />

        <Project
          projectID="gradientGenerator"
          heading="Gradient Generator"
          description="A Linear Gradient Generator."
          image={imageGradientGenerator}
          liveLink={"https://asjadjawed.github.io/gradient-generator/"}
          sourceLink={"https://github.com/asjadjawed/gradient-generator"}
        />

        <Project
          projectID="gradientGenerator"
          heading="Gradient Generator"
          description="A Linear Gradient Generator."
          image={imageGradientGenerator}
          liveLink={"https://asjadjawed.github.io/gradient-generator/"}
          sourceLink={"https://github.com/asjadjawed/gradient-generator"}
        />

        <Project
          projectID="gradientGenerator"
          heading="Gradient Generator"
          description="A Linear Gradient Generator."
          image={imageGradientGenerator}
          liveLink={"https://asjadjawed.github.io/gradient-generator/"}
          sourceLink={"https://github.com/asjadjawed/gradient-generator"}
        />
      </div>
    </div>
  );
}
