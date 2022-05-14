import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const PrimaryButton: FC<Props> = memo((props)=>{
  const {children} = props
  return (
    <Button
      borderRadius={0}
      type="submit"
      colorScheme="teal"
    >
      {children}
    </Button>
  )
})