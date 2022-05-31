import { Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Header: FC = memo(()=> {
    return (
        <>
            <Flex
                flexDirection="column"
                width="100wh"
                minH="10vh"
                backgroundColor="gray.200"
                justifyContent="center"
                alignItems="center"
            >
                <Flex align="center" as="a" mr={8} _hover={{cursor: "pointer"}} >
                    <Heading as="h1" fontSize={{base: "md", md:"lg"}}>
                        ユーザー管理アプリ
                    </Heading>
                </Flex>
            </Flex>
        </>
    )
})