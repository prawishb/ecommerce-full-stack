import Image from "next/image";

const PaymentOptions = () => {
  return (
    <div className="flex items-center gap-8">
      <Image
        src="/paypal.png"
        alt="paypal payment option image"
        referrerPolicy="no-referrer"
        width={100}
        height={40}
      />
      <Image
        src="/visa.png"
        alt="visa payment option image"
        referrerPolicy="no-referrer"
        width={100}
        height={40}
      />
    </div>
  );
};

export default PaymentOptions;
