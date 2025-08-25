import { Button as PaperButton } from "react-native-paper";
import { FONT_SIZES, PADDINGS } from "./theme";

export function Button(props) {
  return (
    <PaperButton
      {...props}
      contentStyle={{ paddingHorizontal: PADDINGS.large, paddingVertical: PADDINGS.small }}
      labelStyle={{ fontSize: FONT_SIZES.regular }}
    />
  );
}