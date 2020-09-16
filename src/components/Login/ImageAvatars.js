import React from "react";

const ImageAvatars = (props) => {
  return (
    <li className="my-3 py-2 d-flex align-items-center">
      <div className={`${props.avatar} img_css img_avatar`}></div>
      <p className="text-white ml-2 text-left mb-0 w-75 dt d-inline-block">
        {props.desc}
      </p>
    </li>
  );
};

export default ImageAvatars;
