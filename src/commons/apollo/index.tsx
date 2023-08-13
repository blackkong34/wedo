import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IApolloProps {
  children: JSX.Element;
}

export default function Apollo(props: IApolloProps): JSX.Element {
  const client = new ApolloClient({
    uri: "https://backendonline.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
