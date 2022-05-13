import React from "react";
import "./banner.css"
import SimpleImageSlider from "react-simple-image-slider";

type bannerType = "banner" | "slider";

interface Props {
  bannerType: bannerType;
  sliderImages?: Array<{
      url: string
  }>;
  bannerImage?: string
}

const Banner = (props: Props) => {
  return (
    <>
      {props.bannerType === "banner" ? (
        <img src={props.bannerImage} className="image-banner img-responsive" alt="" />
      ) : (
        <SimpleImageSlider 
            width={"100%"} 
            height={350} 
            showNavs={false} 
            showBullets={true} 
            images={props.sliderImages as any} 
        />
      )}
    </>
  );
};

export default Banner;
