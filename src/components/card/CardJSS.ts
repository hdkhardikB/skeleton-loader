import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        borderRadius: theme.shape.borderRadius * 3,
    }
}), { name: 'evlCard', defaultTheme: EvlTheme });

export default useStyles;