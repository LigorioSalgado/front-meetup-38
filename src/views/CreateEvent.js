import React from "react";
import Layout from "../components/Layout";

function CreateEvent() {
  return (
    <Layout title="Crea un nuevo evento">
      <h2> Crea un evento</h2>
      <form>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Titulo del evento</label>
            <input
              type="text"
              className="form-control"
              placeholder="Titulo del evento"
              name="title"
             
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Descripción</label>
            <textarea name="descritpion" id="" cols="30" rows="10" placeholder="Descripción"></textarea>
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Fecha del evento</label>
            <input
              type="text"
              className="form-control"
              name="date"
              placeholder="Fecha del Evento"
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Banner</label>
            <input
              type="file"
              className="form-control"
              placeholder="Evento"
              name="banner"
               
              required
            />
          </div>
        </div>
        <h3>Direccion</h3>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Calle</label>
            <input
              type="text"
              className="form-control"
              name="street"
              placeholder="Calle:"
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Numero:</label>
            <input
              type="text"
              className="form-control"
              name="number"
              placeholder="Numero:"
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Ciudad:</label>
            <input
              type="text"
              className="form-control"
              name="city"
              placeholder="Ciudad"
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>País:</label>
            <input
              type="text"
              className="form-control"
              placeholder="País"
              name="country"
              required
            />
          </div>
        </div>
        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>Estado:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Estado"
              name="state"
              required
            />
          </div>
        </div>

        <div className="control-group">
          <div className="form-group floating-label-form-group controls">
            <label>CP:</label>
            <input
              type="text"
              className="form-control"
              placeholder="CP"
              name="zip"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" >
            Submit
        </button>

      </form>
    </Layout>
  );
}

export default CreateEvent;
