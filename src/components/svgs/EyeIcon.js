export default function EyeIcon(props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="30"
        height="30"
        fill="currentColor"
        className="text-slate-500 opacity-50"
        {...props}
      >
        <path
          fill="none"
          stroke="#010101"
          strokeMiterlimit="10"
          strokeWidth="4"
          d="M32,18c16,0,29,14,29,14S48,46,32,46,3,32,3,32,16,18,32,18Z"
        />
        <circle
          cx="32"
          cy="32"
          r="14"
          fill="none"
          stroke="#010101"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
        <circle
          cx="32"
          cy="32"
          r="2"
          fill="none"
          stroke="#010101"
          strokeMiterlimit="10"
          strokeWidth="4"
        />
      </svg>
    </>
  );
}
