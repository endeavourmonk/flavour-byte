// import DeliveryBoyGIF from "../assets/delivery-boy.gif";
import { DELIVERY_BOY_GIF } from "../utils/constants";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <img
        className="w-full max-w-xs object-contain"
        alt="loading"
        src={DELIVERY_BOY_GIF}
      />
    </div>
  );
};

export default Loading;
