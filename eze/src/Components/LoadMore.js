import React from "react";

import { StyledLoadMore } from "../Styles/StyledLoadMore";

const LoadMore = ({ LoadMore }) => (
  <StyledLoadMore type="button" onClick={LoadMore}>
    Load More
  </StyledLoadMore>
);

export default LoadMore;
