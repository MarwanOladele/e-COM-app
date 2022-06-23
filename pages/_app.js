import { Layout } from "../components";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import React from "react";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
