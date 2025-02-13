const src = "https://www.w3schools.com/html/mov_bbb.mp4";

const Video = ({ videoRef }) => {
  return (
    <video ref={videoRef} src={src} controls className="w-full h-full"></video>
  );
};

export default Video;
