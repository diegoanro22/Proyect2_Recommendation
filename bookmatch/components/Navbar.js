'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/navigation';

const Navbar = ({ value, handleChange }) => {
    const router = useRouter();

    const handleTabChange = (event, newValue) => {
        handleChange(event, newValue);
        switch (newValue) {
            case 0:
                router.push('/main/libros');
                break;
            case 1:
                router.push('/main/generos');
                break;
            case 2:
                router.push('/main/recomendaciones');
                break;
            case 3:
                router.push('/main/libros_leidos');
                break;
            default:
                break;
        }
    };

    return (
        <AppBar position="static" color="primary" sx={{ backgroundColor: 'white', paddingTop: 2 }}>
            <Toolbar>
                <Tabs value={value} onChange={handleTabChange} centered>
                    <Tab label="Libros" />
                    <Tab label="Géneros" />
                    <Tab label="Recomendaciones" />
                    <Tab label="Libros leídos" />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
