import React from "react";
import ReactDOMClient from "react-dom/client";
import { LineChartUp } from "./screens/LineChartUp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<LineChartUp />);
