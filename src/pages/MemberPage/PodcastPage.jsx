import video from "../../Contents/PodCastPageContent";
const PodcastPage = () => {
    
  
    return (
      <div className="h-[650px]">
        <h1 className="text-white text-3xl text-center py-16 tracking-wide font-sans">
          Podcast
        </h1>
        <div className="space-y-10">
          {video.map((element, index) => (
            <div key={index} className="text-white">
              <div className="flex items-center space-x-24 justify-center">
                <iframe
                  className="rounded-3xl border border-gray-800"
                  width="200"
                  height="200"
                  src={element.videourl}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="w-[50%]">{element.content}</p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="bg-grad-member relative right-80 bottom-80"></div>
      </div>
    );
  };
  
  export default PodcastPage;
  