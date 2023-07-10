import { PropsWithChildren } from "react";

const HText = ({children}: PropsWithChildren) => {
  return <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
    {children}
  </h1>
}

export default HText;