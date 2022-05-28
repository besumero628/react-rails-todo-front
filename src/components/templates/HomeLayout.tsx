import { FC, memo } from "react";
import { Foooter } from "../organisms/layout/Footer";

export const HomeLayout: FC = memo(()=> {
    return (
        <>
            <p>home layout</p>
            <Foooter />
        </>
    )
})