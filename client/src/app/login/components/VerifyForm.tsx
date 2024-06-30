import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@nextui-org/button";
const VerifyForm = () => {
  return (
    <form>
        <h2 className="text-center text-2xl">Tasdiqlash codeni kiriting</h2>
      <div className="flex flex-col items-center mt-2">
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
        <Button className="mt-4 w-[150px]" radius="sm" color="primary">Tasdiqlash</Button>
      </div>
    </form>
  );
};
export default VerifyForm;
