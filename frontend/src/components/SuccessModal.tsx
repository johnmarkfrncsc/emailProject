type SuccessModalProps = {
  isOpen: boolean;
  isClose: () => void;
};

const SuccessModal = ({ isOpen, isClose }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 w-full max-w-sm">
        <div className="text-violet-500 text-5xl mb-4"></div>
        <h2 className="text-white text-xl font-light tracking-tight">
          Email Sent!
        </h2>
        <p className="text-zinc-500 text-sm mt-2 mb-6">
          Your message was delivered successfully
        </p>
        <button
          type="button"
          onClick={isClose}
          className="w-full bg-violet-600 hover:bg-violet-500 text-white rounded-lg py-3 text-sm tracking-widest uppercase"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
