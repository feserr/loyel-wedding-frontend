import "../Styles/welcome.css"

interface WelcomeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Welcome({ isOpen, onClose }: WelcomeProps) {
  return (
    <div
      className={
        "fixed h-screen w-screen left-0 top-0 z-10 transition-all duration-1000" +
        (!isOpen ? " -translate-y-full" : "")
      }
    >
      <div className="h-screen w-screen flex flex-row justify-center items-start fixed overflow-auto py-20 box-border welcome-background">
        <div className="flex flex-col items-center p-5 my-auto w-full md:w-[500]">
          <h5 className="text-center font-medium text-xl md:text-2xl mb-2 md:mb-3 text-gray-500 normal-text">
            Invitación de boda
          </h5>
          <h4 className="text-center text-5xl md:text-6xl mb-6 head-text">
            Lorena & Elías
          </h4>
          <button
            type="button"
            className="px-5 transition-all py-3 font-medium rounded-md text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer normal-button normal-text"
            onClick={onClose}
          >
            Abrir invitación
          </button>
        </div>
      </div>
    </div>
  );
}
