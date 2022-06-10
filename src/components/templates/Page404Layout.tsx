import { FC, memo } from "react";
import { Foooter } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";

export const Page404Layout: FC = memo(() => {
    return(
        <>
            <Header />
                <p>test</p>
            <Foooter />
        </>
    )
})