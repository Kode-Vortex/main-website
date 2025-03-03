import "./MemberPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import memberpagecontent from "../../Contents/MemBerPageContent"
const MemberPage = () => {
  const items = Array.from({ length: 38 }, () => `KodeVortex`);
  const rows = [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  for (let i = 0; i < items.length; ) {
    if ((rows.length + 1) % 2 !== 0) {
      rows.push(
        <div key={i} className="flex justify-center textcolkodevor">
          {items.slice(i, i + 5).map((item, index) => (
            <p
              key={i + index}
              className="text-4xl font-medium mr-2 text-gray-500 opacity-50"
            >
              {item}
            </p>
          ))}
        </div>
      );
      i += 3;
    } else {
      rows.push(
        <div key={i} className="flex justify-center textcolkodevor">
          {items.slice(i, i + 8).map((item, index) => (
            <p
              key={i + index}
              className="text-2xl  text-gray-500 mr-2 py-0.5 opacity-50"
            >
              {item}
            </p>
          ))}
        </div>
      );
      i += 4;
    }
  }



  return (
    <div className=" h-[450px]">
      <div className=" my-10 relative flex">
        <div className="text-white opacity-50">{rows}</div>;
        <div className="absolute right-4 text-white flex flex-col items-center justify-center w-full">
          <div className="bg-grad-purple1 relative mx-auto top-3 flex justify-center items-center"></div>

          <h1 className=" absolute text-lg tracking-wide mx-auto top-[30px] text-white text-center ">
            Inspirational Content
          </h1>
          <Slider className="w-[90%] flex    rounded-lg" {...settings}>
            {memberpagecontent.map((element, index) => (
              <div
                key={index}
                className="h-80 bgcol5 flex items-center justify-center  text-white rounded-xl p-4"
              ></div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="bg-grad-member relative left-[1200px] bottom-60 "></div>
    </div>
  );
};

export default MemberPage;
