import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

const AndroidIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Android"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      d="M338.156 305.71a14.867 14.867 0 1 1 14.864-14.87 14.886 14.886 0 0 1-14.864 14.87m-164.311 0a14.867 14.867 0 1 1 14.864-14.87 14.884 14.884 0 0 1-14.864 14.87m169.642-89.546 29.708-51.455a6.182 6.182 0 1 0-10.704-6.188l-30.084 52.105c-23.005-10.5-48.842-16.346-76.41-16.346s-53.402 5.855-76.407 16.346l-30.081-52.105a6.181 6.181 0 1 0-10.707 6.18l29.712 51.463c-51.016 27.748-85.91 79.394-91.014 140.413h357c-5.11-61.02-40-112.665-91.013-140.413"
      fill={props.color}
    />
  </Svg>
)

export default AndroidIcon