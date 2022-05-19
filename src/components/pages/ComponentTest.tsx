import { ViewIcon } from "@chakra-ui/icons";
import { FormControl, Icon } from "@chakra-ui/react";
import { FC, memo } from "react";
import { BoxWithIcon } from "../atom/box/BoxWithIcon";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { ViewIconButton } from "../atom/button/ViewIconButton";

export const Test: FC = memo(()=>{
  return (
    <>
      <PrimaryButton>Button!</PrimaryButton>
      <ViewIconButton showPassword={false} />
      <FormControl isRequired>
        <BoxWithIcon placeholder="username" lefticon={<Icon as={ViewIcon} />} righticon={<ViewIconButton showPassword={true} />} />
      </FormControl>
    </>
  )
})