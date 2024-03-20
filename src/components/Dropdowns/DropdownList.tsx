import React from 'react';
import {DropdownItem, DropdownsListItem} from './DropdownItem';
import {useSharedValue} from 'react-native-reanimated';

type DropdownsListProps = {
  header: DropdownsListItem;
  options: DropdownsListItem[];
};

export const DropdownList = ({header, options}: DropdownsListProps) => {
  const allItemsArray = [header, ...options];

  const isExpanded = useSharedValue(false);

  return (
    <>
      {allItemsArray.map((item, index) => (
        <DropdownItem
          key={index}
          index={index}
          isExpanded={isExpanded}
          dropdownItemsCount={allItemsArray.length}
          {...item}
        />
      ))}
    </>
  );
};
