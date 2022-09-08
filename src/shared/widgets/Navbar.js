import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export const Navbar = (props) => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<>
        <Tabs value={value} onChange={handleChange} >
            {props.category.map((c, index) => <Tab key={index} label={c.name} component={NavLink} to={c.url} />)}
        </Tabs>
    </>
    );
}