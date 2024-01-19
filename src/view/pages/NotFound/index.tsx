import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-9xl text-white">404</h1>
      <Link to="/" className="mt-4 underline tracking-tight text-white">
        Voltar ao início.
      </Link>
    </div>
  );
}
