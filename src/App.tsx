// import Button from "./shared/components/Button";
// import Input from "./shared/components/Input";
// import { MdOutlineEmail } from "react-icons/md";
// import { LuEyeOff } from "react-icons/lu";
// import Checkbox from "./shared/components/Checkbox";
import AuthHeader from "./shared/components/AuthHeader";
import AuthFooter from "./shared/components/AuthFooter";


function App() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb] p-4">
    //   <div className="w-full max-w-[420px]">
    //     <AuthHeader
    //       title="Welcome Back!"
    //       subtitle="Please enter your details to sign in to your account."
    //       align="center"
    //     />
    //   </div>    
    // </div>
    <div>
        <div className="w-full max-w-[420px]">
       <AuthHeader
        title="Welcome Back!"
       subtitle="Please enter your details to sign in to your account."
         align="center"
        />
      </div> 
      <AuthFooter />
    </div>

    // <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb] p-4">
    //   <div className="w-full max-w-[40px]">
    //     <Button fullWidth>Submit</Button>
    //   </div>
    // </div>
//     <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb] p-4">
//       <div className="w-full max-w-[420px]">
//        <Input
//   label="Email"
//   placeholder="Enter your email"
//   fullWidth
//   rightIcon={<MdOutlineEmail size={16} color="primaryicon" />}
// />

// <Input
//   label="Password"
//   type="password"
//   placeholder="Enter password"
//   fullWidth
//   rightIcon={<LuEyeOff size={16} />}
// />
//       </div>    
//     </div>
// {/* <Checkbox label="Remember Me" /> */}
  );
}

export default App;



