import type { SVGProps } from "react"

export function BehanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 11h-5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-5 2h5" />
      <path d="M5 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5v-7Zm0 0v-3h3a2 2 0 0 1 2 2v1H5Z" />
      <path d="M14 7h5" />
    </svg>
  )
}
