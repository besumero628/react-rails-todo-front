import { ViewIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  show: boolean
}

export const ViewIconButton:FC<Props> = memo((props)=> {
  const {show = false} = props
  return (
    <Icon as={ViewIcon} />
  )
})