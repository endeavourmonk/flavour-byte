// import DeliveryBoyGIF from "../assets/delivery-boy.gif";
import DeliveryBoyGIF from "../assets/delivery_boy.gif";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <img
        className="w-full max-w-xs object-contain"
        alt="loading"
        src={DeliveryBoyGIF}
      />
    </div>
  );
};

export default Loading;
