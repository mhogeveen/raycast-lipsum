import { List, ActionPanel, CopyToClipboardAction, PasteAction, Icon } from '@raycast/api';

const Command = (): JSX.Element => {
  return (
    <List
      searchBarPlaceholder={'Enter an amount of lipsum to generate'}
    >
    </List>
  );
}

export default Command;