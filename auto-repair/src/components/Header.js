import React from "react";
import { useState } from "react";
import { Container, Grid} from "@mui/material";

export default function Header(props) {

    return(
        <div class="page-header">
            <Container >
                <Grid container>
                    <Grid item xs={12} lg={12}>
                        <h2>{props.page.title}</h2>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <a href="/">Home</a>
                        <a href={props.page.location}>{props.page.title}</a>
                    </Grid>
                </Grid> 
            </Container>
        </div>
    );
}
