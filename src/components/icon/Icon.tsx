import React from "react";
import SPRITE from "../../assets/images/SPRITE.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  className?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "32.000000"}
      height={props.height || "32.000000"}
      viewBox={props.viewBox || "0 0 32 32"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <use xlinkHref={`${SPRITE}#${props.iconId}`} />
    </svg>
  );
};
