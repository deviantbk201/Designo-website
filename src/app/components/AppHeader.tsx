import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import AppHeaderNav from "./AppHeaderNav";
import Logo from "./Logo";

export default function AppHeader() {
  return (
    <header className="flex justify-between p-8">
      <Logo imageSource="/shared/desktop/logo-dark.png" />
      <AppHeaderNav />
    </header>
  );
}

// export default function AppHeader() {
//   <header className="flex justify-between p-8">
//     <Logo />
//     <div className="hidden md:inline-block">
//       <AppHeaderNav />
//     </div>
//     <Popover placement="left" className="md:hidden">
//       <PopoverTrigger>PopOver</PopoverTrigger>
//       <PopoverContent>
//         <AppHeaderNav />
//       </PopoverContent>
//     </Popover>
//   </header>;
