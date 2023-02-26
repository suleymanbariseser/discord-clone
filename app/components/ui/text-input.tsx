import clsx from 'clsx';

type Props = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
  name: string
};

const TextInput = ({
  label,
  onChange,
  placeholder,
  value,
  error,
  className,
  name
}: Props) => {
  return (
    <div className={clsx('w-full text-sm', className)}>
      <p className={clsx('mb-1', !!error && 'text-red-700')}>
        <span className='uppercase'>{label}</span>
        {error && (
          <span>
            {' - '}
            <span className='italic text-xs'>{error}</span>
          </span>
        )}
      </p>
      <input
        className='bg-zinc-900 w-full p-2 outline-none'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default TextInput;
