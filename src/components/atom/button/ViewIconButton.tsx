import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  show: boolean
  color: string
}

export const ViewIconButton:FC<Props> = memo((props)=> {
  const {show = false, color} = props
  return (
    show ? <Icon as={ViewIcon} color={color} /> : <Icon as={ViewOffIcon} color={color} />
  )
})