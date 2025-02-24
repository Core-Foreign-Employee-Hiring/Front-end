import { useState } from "react";

const useFilter = <T, >(initialSelectedContent: T) => {
    const [selectedContent, setSelectedContent] = useState<T>(initialSelectedContent);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return [selectedContent, setSelectedContent, isFocused, setIsFocused] as const;
};

export default useFilter;
