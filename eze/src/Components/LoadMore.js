import React from "react";

import { StyledLoadMore } from "../Styles/StyledLoadMore";

const LoadMore = ({ loadMore }) => (
  <StyledLoadMore onClick={loadMore}>Load More</StyledLoadMore>
);

export default LoadMore;
