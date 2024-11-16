interface ICompanyAvatarProps {
  name: string;
  handleOnClick: (currentCompanyId: string) => void;
}

export function CompanyAvatar({ name, handleOnClick }: ICompanyAvatarProps) {
  return (
    <div
      className="flex flex-col justify-center items-center"
      role="button"
      tabIndex={0}
      onClick={() => handleOnClick(name)}
    >
      <div className="bg-gray-50 rounded-full w-32 h-32 flex items-center justify-center border border-gray-200 hover:border-solid hover:border-gray-300 hover:bg-gray-200 transition-all">
        <span className="text-4xl tracking-tight text-gray-900 font-medium">
          {name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <span className="mt-4 text-xl text-gray-600 tracking-[-1px]">{name}</span>
    </div>
  );
}
