import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { StyledForm } from './StyledComponents';

export default function SearchBox({ search, handleSearch, placeholder }) {

    return (
        <StyledForm>
            <TextField
                placeholder={placeholder || 'Search'}
                size="small"
                variant="standard"
                onChange={handleSearch}
                value={search && search}
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    )
                }} />
        </StyledForm>
    );
}
