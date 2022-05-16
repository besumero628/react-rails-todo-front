import { FC, memo } from "react";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { ViewIconButton } from "../atom/button/ViewIconButton";

export const Test: FC = memo(()=>{
  return (
    <>
      <PrimaryButton>Button!</PrimaryButton>
      <ViewIconButton show={true} />
    </>
  )
})