import * as React from "react";
import Image from "next/image";
import { FeatureTitle, ContentTitle } from "./FeaturedCasino.module";
import Rating from "../../core/Rating/Rating";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../core/Button/Button";

const FeaturedCasino = (props) => {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <div className="relative">
      <Image
        src={props.img}
        alt="Picture of the author"
        layout="responsive"
        sizes="(max-width: 768px) 90vw,
            (max-width: 1200px) 80vw,
            80vw"
        className="cursor-pointer"
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      ></Image>
      <div
        className={`absolute left-5 bottom-5 transition ${
          isShow ? "opacity-80" : "opacity-0"
        }`}
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <FeatureTitle>{props.title}</FeatureTitle>
        <div className="flex items-center">
          <Rating value={props.value} activeColor="#C9C9C9"></Rating>
          <ContentTitle className="pl-5">
            {props.value}/5 based on {props.review}reviews
          </ContentTitle>
        </div>
        <div className="pt-3">
          <Button
            label="Visit Casino"
            handleClick={() => {
              console.log("Visit Casino");
            }}
            variant="model"
          >
            <div className="pl-1 pt-1">
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCasino;
