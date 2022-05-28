import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Foooter: FC = memo(()=> {
    return (
        <>
            <Flex
                flexDirection="column"
                width="100wh"
                minH="10vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
                // position="absolute"
            ></Flex>
        </>
    )
})