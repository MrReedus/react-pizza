import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#ebeaea"
    foregroundColor="#d2d1d1"
  >
    <rect x="0" y="243" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="291" rx="10" ry="10" width="280" height="88" />
    <circle cx="133" cy="119" r="111" />
    <circle cx="156" cy="139" r="8" />
    <rect x="2" y="398" rx="5" ry="5" width="90" height="27" />
    <rect x="124" y="389" rx="11" ry="11" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
