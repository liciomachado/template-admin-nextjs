import { Container, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import Layout from "../components/template/Layout";
import TelaCheiaDialog from "../components/template/TelaCheiaDialog";

interface EmpenhosProps {

}

export default function Empenhos(props: EmpenhosProps) {
    const [openDialogInsert, setOpenDialogInsert] = useState(true)
    return (
        <Layout titulo="Empenhos" subtitulo="Realize consultas e cadastre seus empenhos!">
            <TelaCheiaDialog open={openDialogInsert} setOpen={setOpenDialogInsert} textoBotao="Cadastrar Empenho">
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <TextField id="standard-basic" label="Número de Empenho" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField id="standard-basic" label="Número de Empenho" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField id="standard-basic" label="Número de Empenho" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField id="standard-basic" label="Número de Empenho" />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <TextField
                                id="date"
                                label="Data do Empenho"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </TelaCheiaDialog>
        </Layout>
    )
}
