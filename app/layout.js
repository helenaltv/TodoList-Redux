"use client";
import "./globals.css";
import "./styles/todo.css";

import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./store/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <div className="todo-container">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
