import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import React from "react";
import { stateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <stateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </stateContext>
  );
}

export default MyApp;
