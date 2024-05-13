import DeliveryBoyGIF from "../assets/Delivery Boy.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img
        className="w-full max-w-xs object-contain"
        alt="loading"
        src={DeliveryBoyGIF}
      />
    </div>
  );
};

export default Loading;
