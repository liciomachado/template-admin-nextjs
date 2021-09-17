import { Button, Container, Grid, TextField } from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from "@mui/system";
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useState } from "react";
import Layout from "../components/template/Layout";
import TelaCheiaDialog from "../components/template/TelaCheiaDialog";

interface EmpenhosProps {

}
interface FilmOptionType {
    title: string;
    year: number;
}
export default function Empenhos(props: EmpenhosProps) {
    const [openDialogInsert, setOpenDialogInsert] = useState(false)

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option: FilmOptionType) => option.title,
    };

    return (
        <Layout titulo="Empenhos" subtitulo="Realize consultas e cadastre seus empenhos!">
            <TelaCheiaDialog open={openDialogInsert} setOpen={setOpenDialogInsert} textoBotao="Cadastrar Empenho">
                <Container maxWidth="md" style={{ marginTop: 50 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Autocomplete
                                {...defaultProps}
                                id="clear-on-escape"
                                clearOnEscape
                                style={{ marginTop: 3 }}
                                renderInput={(params) => (
                                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                        <AccountCircle style={{ marginRight: 2 }} />
                                        <TextField {...params} label="Empresa" variant="standard" fullWidth style={{ padding: 2 }} />
                                    </Box>
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <TextField id="standard-basic" label="E-mail" disabled fullWidth />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle style={{ marginRight: 2 }} />
                                <TextField id="standard-basic" label="Telefone" disabled fullWidth />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle style={{ marginRight: 2 }} />
                                <TextField id="standard-basic" label="Número de Empenho" fullWidth />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle style={{ marginRight: 2 }} />
                                <TextField id="standard-basic" type="number" label="Valor" fullWidth />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle style={{ marginRight: 2 }} />
                                <TextField id="standard-basic" label="Destino" fullWidth />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <TextField id="standard-basic" type="file" label="PDF" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle style={{ marginRight: 2 }} />
                                <TextField
                                    id="standard-multiline-static"
                                    label="Mensagem complementar no e-mail"
                                    variant="standard"
                                    fullWidth
                                />                            </Box>

                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={3}>
                            <TextField
                                id="date"
                                label="Data do Empenho"
                                type="file"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid> */}
                    </Grid>
                </Container>
            </TelaCheiaDialog>
        </Layout>
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];
