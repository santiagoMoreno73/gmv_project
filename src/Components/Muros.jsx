import React from "react";

// components
import Navigation from "../Components/Shared/Navigation";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Muros = () => {
  return (
    <>
      <Navigation isMuros={true} />
      <div style={{ margin: "0em 1em" }}>
        <div>
          <p>Esta seccion esta protegida por clave.</p>
          <p>
            Introduce la clave de acceso para identificarte en la app. Si no te
            acuerdas o no te han enviado, solicitala a través del siguiente
            enlace.
          </p>
          <TextField
            fullWidth
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <TextField
            fullWidth
            id="standard-basic"
            label="Clave de Acceso"
            variant="standard"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2em 0em",
          }}
        >
          <Button style={{ background: "#e30611" }} variant="contained">
            Aceptar
          </Button>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <a style={{ color: "#e30611" }}>¿has olvidado tu email?</a>
        </div>
      </div>
    </>
  );
};

export default Muros;
