import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="284" rx="10" ry="10" width="280" height="30" /> 
    <rect x="49" y="501" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="337" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="455" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="446" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton

