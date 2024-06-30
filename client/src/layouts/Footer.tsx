import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="dark:bg-background/50 border-t border-[#262626] pt-5 pb-2 backdrop-saturate-150">
      <div className="text-center">
        <p className="text-base">Barcha huquqlar himoyalangan 2024</p>
        <p className="flex gap-2 items-center justify-center mt-2 text-sm">
          Made by 
          <Link href="https://hikmatbek.uz" target="_blank" title="Hikmatbek">
            <IconUser size={18} color="white" />
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
