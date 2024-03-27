"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // Make the screenSize slice initial false
    storeRef.current.dispatch({
      type: "screenSize/setIsMobile",
      payload: false,
    });
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
