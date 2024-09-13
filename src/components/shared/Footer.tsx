import logo from "@/assets/img/Vector.svg";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-10">
      <footer className="bg-[#F5F5F5] h-[70px] flex justify-between items-center px-6">
        <div className="text-gray-700 text-sm ml-64">
          Privacy Policy • Terms of Service • © 2024-2026 One.HR All rights
          reserved
        </div>
        <div className="flex items-center">
          <img
            src={logo}
            alt="One.HR Logo"
            height={38}
            width={53}
            className="mr-2"
          />
          <h1 className="font-urbanist text-lg font-bold">ONE.HR</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
