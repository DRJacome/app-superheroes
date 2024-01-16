import React from 'react'
import { Navbar } from "../components/ui/NavBar"
import { Route, Switch, Redirect } from "react-router-dom"
import { VistaMarvel } from '../components/marvel/VistaMarvel'
import { VistaHeroe } from '../components/heroes/VistaHeroe'
import { VistaDC } from '../components/dc/VistaDC'
import { VistaBusqueda } from '../busqueda/VistaBusqueda'
import { VistaHome } from '../components/app-superheroes/VistaHome'


export const PanelRutas = () => {
  return (
    <>
      <Navbar />
      <div className='contanier mt-2 ml-5'>
        <Switch>
          <Route exact path='/marvel' component={VistaMarvel} />
          <Route exact path='/heroe/:heroeId' component={VistaHeroe} />
          <Route exact path='/dc' component={VistaDC} />
          <Route exact path='/busqueda' component={VistaBusqueda} />
          <Route exact path='/app-superheroes' component={VistaHome} />

          <Redirect to='/app-superheroes' />
        </Switch>
      </div>
    </>
  )
}