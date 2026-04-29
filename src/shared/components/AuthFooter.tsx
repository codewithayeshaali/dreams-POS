interface AuthFooterProps {
  text?: string;
}

export function AuthFooter({ text }: AuthFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full justify-center">
      <p className="text-center text-[11px] leading-5 text-gray-500 sm:text-xs">
        {text ?? `Copyrights © ${year} - DreamsPOS`}
      </p>
    </footer>
  );
}

export default AuthFooter;

