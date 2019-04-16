import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    
    flex:1,
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


function SelectCat({classes}) {
  const [category, setCategory] = useState([1,2,3,4]);
  
  return (
     <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Category</InputLabel>
          <Select
            native
            value={category[3]}
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
            }}
          >
            <option value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Select>
        </FormControl>
  )
}



export default withStyles(styles)(SelectCat)
