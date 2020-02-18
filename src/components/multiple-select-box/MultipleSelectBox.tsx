import * as React from 'react';
import useStyles from './MultipleSelectBoxJSS';
import Autocomplete from '@material-ui/lab/Autocomplete';
import EvlTextBox from '@components/text-field';

export interface EvlMultipleSelectBoxProps {}

export const EvlMultipleSelectBox: React.FC<EvlMultipleSelectBoxProps> = ({}) => {
  const classes = useStyles();
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
  ];
  return (
    <div className={classes.root}>
      <Autocomplete
        multiple={true}
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option: any) => option.title}
        defaultValue={[top100Films[13]]}
        renderInput={(params: any) => (
          <EvlTextBox {...params} variant="standard" label="Multiple values" placeholder="Favorites" fullWidth />
        )}
      />
    </div>
  );
};

export default EvlMultipleSelectBox;
