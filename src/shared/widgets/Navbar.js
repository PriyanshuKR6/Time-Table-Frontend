import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export const Navbar = (props) => {

    const [value, setValue] = useState(0);
    // setValue(props.category.name)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const links = props.category.map((c, index) => <Link to={c.url} key={index}>{c.name} &nbsp;</Link>); 
    return (<>
        <Tabs value={value} onChange={handleChange} >
            {props.category.map((c, index) => <Tab key={index} label={c.name} component={Link} to={c.url} />)}
            {/* console.log(value); */}
            {/* <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" /> */}
        </Tabs>
    </>
    );
}