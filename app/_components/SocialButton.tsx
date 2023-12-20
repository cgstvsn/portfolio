import Link from "next/link";

const SocialButton = (props: any) => {
  const { children, href } = props;
  return (
    <Link
      href={href}
      target='_blank'
      className='flex items-center justify-center gap-2 w-full sm:w-min bg-zinc-100 text-zinc-800 hover:brightness-95 transition rounded-lg px-8 py-2'
    >
      {children}
    </Link>
  );
};

export default SocialButton;
