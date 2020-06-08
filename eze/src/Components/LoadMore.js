import React from "react";

import { StyledLoadMore } from "../Styles/StyledLoadMore";

const LoadMore = () => (
  // { text, callback }
  <StyledLoadMore
    type="button"
    //   onClick={callback}
  >
    Load More
    {/* {text} */}
  </StyledLoadMore>
);

export default LoadMore;
