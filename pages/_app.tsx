import type { AppProps } from "next/app";
import Apollo from "@/src/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "@/src/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Apollo>
      <>
        <Global styles={globalStyles} />
        <Component {...pageProps} />;
      </>
    </Apollo>
  );
}
