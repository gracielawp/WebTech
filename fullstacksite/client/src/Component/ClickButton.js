import { Link } from "react-router-dom";
import React, {Component} from 'react';
import { OutlinedButton } from '../views/ButtonStyle'
import Button from "@material-ui/core/Button";
import merch from "../views/MerchPage.module.css";

export function ClickHomeButton(props) {
    return (
        <Link to={`/${props.path}`} style={{textDecoration: 'none'}}>
            <OutlinedButton variant={props.buttonStyle}>{props.name}</OutlinedButton>
        </Link>
    );
}

export function ClickDetailButton(props) {
    return (
        <Link to={`/merch/${props.path}`} style={{textDecoration: 'none'}}>
            <Button variant='contained' style={{width: '50vh'}}>
                DETAILS
            </Button>
        </Link>
    );
}

export function ClickHeadBar(props) {
    if (props.name === props.currentPage) {
        return (
            <Link to={`/${props.path}`} style={{textDecoration: 'none'}}>
                <Button variant='contained' disabled
                        style={{background:'#FF7A51', color:'white', width: '20vh', fontSize: '3vh'}}>
                    {props.name}
                </Button>
            </Link>
        )
    } else {
        return (
            <Link to={`/${props.path}`} style={{textDecoration: 'none'}}>
                <Button color="inherit"
                        style={{color: 'tomato', width: '20vh', fontSize: '3vh'}}>
                    {props.name}
                </Button>
            </Link>
        )
    }
}