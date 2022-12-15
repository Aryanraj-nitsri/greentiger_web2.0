import React from "react";
import { LandingPage, baseUrl ,VideoComponent,label_VideoComponent} from "./Index";

export default function Home() {
  return (
  <div>
    <LandingPage url={`${baseUrl}website_3_0/videos/gt-new.mp4`}/>;
    {/* gt-app section  */}
    <VideoComponent url={`${baseUrl}website_3_0/videos/App_Video.mp4`}  text={label_VideoComponent[0]}/>
    {/* Vechile we convert Section  */}
    <VideoComponent url={`${baseUrl}website_3_0/videos/vehicle_we_convert.mp4`} text={label_VideoComponent[1]}/>

  </div>
  )
}
