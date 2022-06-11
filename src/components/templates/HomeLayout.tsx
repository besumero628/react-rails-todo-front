import { FC, memo } from "react";
import { Header } from "../organisms/layout/Header";

export const HomeLayout: FC = memo(()=> {
    return (
        <>
            <Header />
            <p>home layout</p>
        </>
    )
})