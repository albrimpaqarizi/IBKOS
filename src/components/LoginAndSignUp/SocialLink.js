import React from "react";
import {
  GrFacebookOption,
  GrGooglePlus,
  GrLinkedinOption,
} from "react-icons/gr";

const iconsLink = ["facebook", "google", "linkedin"];

const SocialLink = () => {
  const icons = [
    <GrFacebookOption className="icon_signup" />,
    <GrGooglePlus className="icon_signup" />,
    <GrLinkedinOption className="icon_signup" />,
  ];
  return (
    <ul className="socialLink_signup">
      {icons.map((item, idx) => (
        <li key={idx}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.${iconsLink[idx]}.com`}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLink;
