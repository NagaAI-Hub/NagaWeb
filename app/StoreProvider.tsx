"use client";
import { type AppStore, makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";

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
