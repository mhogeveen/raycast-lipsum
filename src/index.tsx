import { List, ActionPanel, CopyToClipboardAction, PasteAction, Icon } from '@raycast/api';

import { useState } from 'react';

const Command = (): JSX.Element => {
  const [count, setCount] = useState<number>(1);

  const handleSearchTextChange = (text: string) => {
    const textToInt = parseInt(text, 10);
    const zeroIfNaN = isNaN(textToInt) ? 1 : textToInt;
    setCount(zeroIfNaN);
  }

  return (
    <List
      searchBarPlaceholder={'Enter an amount of lipsum to generate'}
      onSearchTextChange={handleSearchTextChange}
    >
    </List>
  );
}

export default Command;