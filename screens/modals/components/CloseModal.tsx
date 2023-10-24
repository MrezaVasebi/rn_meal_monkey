import React from "react";
import { TouchableOpacity } from "react-native";
import { WrapIcon } from "../../../components";

const CloseModal = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <WrapIcon iconName="close" height={12} width={12} />
    </TouchableOpacity>
  );
};

export default CloseModal;
