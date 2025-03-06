import { Header } from "./Header";
import { Form } from "./Form";

const CreateAccount = () => {
  return (
    <>
      <div className="fixed inset-0 bg-[#2196F3] z-0"></div>
      <div className="min-h-screen z-10 relative">
        <Header />
        <div className="flex mt-15 flex-col items-center px-4 pt-8  text-white">
          <h1 className="text-2xl font-semibold mb-1">Create account</h1>
          <p className="text-sm mb-12">Lorem ipsum dolor sit amet</p>
        </div>
        <div className="flex flex-col items-center ">
          <Form />
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
