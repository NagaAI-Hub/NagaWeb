import {
	setMenuOpen,
	toggleMenu,
} from "@/lib/features/isMenuOpen/isMenuOpenSlice";
// hooks/useMenuOpen.ts
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function useMenuOpen() {
	const dispatch = useAppDispatch();
	const isMenuOpen = useAppSelector((state) => state.isMenuOpen.value);

	const toggle = () => {
		dispatch(toggleMenu());
	};

	const setOpen = (isOpen: boolean) => {
		dispatch(setMenuOpen(isOpen));
	};

	return { isMenuOpen, toggle, setOpen };
}
