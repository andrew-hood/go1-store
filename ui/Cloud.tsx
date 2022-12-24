import React from "react";

export default function Cloud({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1155 678"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
        fillOpacity=".3"
        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
      />
      <defs>
        <linearGradient
          id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
          x1="1155.49"
          x2="-78.208"
          y1=".177"
          y2="474.645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9089FC" />
          <stop offset={1} stopColor="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
