import { List, ActionPanel, CopyToClipboardAction, PasteAction, Icon } from '@raycast/api';

import { useState } from 'react';

import { lorem, getTitle } from './utils';

const Command = (): JSX.Element => {
  const [count, setCount] = useState<number>(1);

  const handleSearchTextChange = (text: string) => {
    const textToInt = parseInt(text, 10);
    const zeroIfNaN = isNaN(textToInt) ? 1 : textToInt;
    setCount(zeroIfNaN);
  }

  const listItems = [
    {
      title: getTitle('word', count),
      content: lorem.generateWords(count)
    },
    {
      title: getTitle('sentence', count),
      content: lorem.generateSentences(count)
    },
    {
      title: getTitle('paragraph', count),
      content: lorem.generateParagraphs(count)
    },
  ];

  return (
    <List
      searchBarPlaceholder={'Enter an amount of lipsum to generate'}
      onSearchTextChange={handleSearchTextChange}
    >
    </List>
  );
}

export default Command;