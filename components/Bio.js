import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";

export default function Bio() {
  const { author, social } = getSiteMetaData();

  return (
    <div className="flex items-center my-12">
      <Image
        className="flex-shrink-0 w-12 h-12 mb-0 mr-3 rounded-full"
        src={require("../content/assets/profile.png")} type="image/jpeg"
		src={require("../content/assets/profile.png?webp")} type="image/webp" 
        previewSrc={require("../content/assets/profile.png?lqip")}
        alt="Profile"
      />
      <p className="mb-0 text-sm font-sans">
        {author.summary}<br/>{" "}
        <a href={`https://www.wsgvet.com`} target="_blank"  rel="noopener" rel="noreferrer">
          우성짱의 홈페이지
        </a>
      </p>
    </div>
  );
}
