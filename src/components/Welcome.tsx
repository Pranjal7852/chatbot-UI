import lfxLogo from "/assets/lfx-logo.png";
export const Welcome: React.FC = () => (
  <div className="bg-white border-gray-100 border-2 rounded-lg px-8 py-5 mr-20 w-full">
    <img src={lfxLogo} alt="LFX Logo" width="400px" />
    <h1 className="text-2xl font-bold mb-2 mt-6">
      AIFAQ PoC Chatbot Framework
    </h1>
    <p>
      This is a user-friendly interface created using{" "}
      <a href="https://tailwindcss.com/" target="_blank">
        Tailwind CSS
      </a>{" "}
      for the ChatBot using{" "}
      <a href="https://react.dev/" target="_blank">
        ReactJs
      </a>
      . This UI can be used to implement the interface as a functional prototype
      that can later be integrated with the backend LLM of user choice.
    </p>
  </div>
);
