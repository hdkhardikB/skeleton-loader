import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import useStyles from './SearchBoxJSS';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

export interface EvlSearchBoxProps {
  onSearch: (text: string) => void;
  placeholder: string;
}
/** Customized Everledger SearchBox which is based on
 * material-ui https://material-ui.com/api/input-base/#inputbase-api */
export const EvlSearchBox: React.FC<EvlSearchBoxProps> = ({ onSearch, placeholder }) => {
  const classes = useStyles();
  const [text, setText] = React.useState<string>('');
  const [clear, setClear] = React.useState(false);

  React.useEffect(() => {
    setClear(!!text);
    onSearch && onSearch(text);
  }, [text]);

  const handleInput = (e: any) => {
    setText(e.target.value as string);
  };

  return (
    <Paper component="form" className={classes.root}>
      <IconButton disabled className={classes.iconButton} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase onChange={handleInput} placeholder={placeholder} className={classes.input} value={text} />
      {clear && (
        <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={() => setText('')}>
          <ClearIcon />
        </IconButton>
      )}
    </Paper>
  );
};

export default EvlSearchBox;
