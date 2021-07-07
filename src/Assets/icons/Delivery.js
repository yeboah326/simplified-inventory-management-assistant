import * as React from "react";

function SvgDelivery(props) {
  return (
    <svg
      width={24}
      height={24}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path d="M7.919 17.377L3.05 4H1a.997.997 0 01-1-1 1 1 0 011-1h3.45l5.469 15.025c.841.101 1.59.5 2.139 1.088l11.258-4.097.684 1.879-11.049 4.021A3.502 3.502 0 019.5 24a3.501 3.501 0 01-1.581-6.623zM9.5 19.188a1.313 1.313 0 11-.002 2.626 1.313 1.313 0 01.002-2.626zm13.314-6.512l-11.418 4.156L8.66 9.314l11.418-4.156 2.736 7.518zm-8.71-3.215l-2.88 1.048 1.368 3.759 7.659-2.787-1.368-3.759-2.9 1.055.684 1.879-1.879.685-.684-1.88zm2.672-4.165L8.318 8.374 6.391 3.078 14.848 0l1.928 5.296zm-3.123-2.733L8.954 4.274l.56 1.537 4.698-1.71-.559-1.538z" />
    </svg>
  );
}

export default SvgDelivery;