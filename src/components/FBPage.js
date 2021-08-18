import React from "react";
import { FacebookProvider, Page } from "react-facebook";

const FBPage = () => {
  return (
    <FacebookProvider appId="1102397030226577">
      <Page
        href="https://www.facebook.com/akaalpurakhkifaujdelhi"
        tabs="timeline"
      />
    </FacebookProvider>
  );
};
export default FBPage;