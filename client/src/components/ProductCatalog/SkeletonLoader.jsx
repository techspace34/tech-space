import React from "react";
import ContentLoader from "react-content-loader";
import s from "./ProductCatalog.module.css";

const SkeletonLoader = props => (
  <ContentLoader className={s.skeleton} viewBox="0 0 400 460" {...props}>
    <rect x="0" y="50" rx="4" ry="4" width="400" height="350" />
  </ContentLoader>
);

export default SkeletonLoader;
