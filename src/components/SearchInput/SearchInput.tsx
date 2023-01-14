import React from 'react';
import {Grid, Input} from "@mui/material";

interface SearchInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}
const SearchInput: React.FC<SearchInputProps> = ({onChange, value}) => {
    return (
        <Grid>
            <Input
                sx={{ margin: 3 }}
                placeholder="Search..."
                value={value}
                onChange={onChange}
            />
        </Grid>
    );
};

export default SearchInput;
