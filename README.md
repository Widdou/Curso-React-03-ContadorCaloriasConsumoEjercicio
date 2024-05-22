# Overview

#### Objetivo:
Manejo de formularios en React, sin uso de librerias.
Aprender los conceptos para lograr el correcto ingreso de datos.

# React useReducer hook

Es el concepto base para herramientas como la libreria Zustand.
Extiende el hook `useState` para facilitar el manejo de estados.

Se utiliza para estados más complejos y transiciones de estados que requieren logica más elaborada. Por ejemplo donde un nuevo estado depende de su estado anterior, ó multiples sub-valores y logica condicional a considerar.

Toma dos argumentos, `const [state, dispatch] = useReduce(reducer, initialState)`

reduce => Funcion que maneja el estado
initialState => Estado inicial 
actions => Funciones que manejan la logica y determinan el siguiente state
payload => Información que modifica el state
dispatch => Función que realiza el llamado de las acciones con el payload

# Trabajar con IDs Unicos

Utilizar la Libreria UUID

`npm i uuid`

Dependencia de tipos durante desarrollo
`npm i --save-dev @types/uuid`

Utilizando la V4, como `uuidv4`

# Hero Icons
De los creadores de TailwindCSS

`npm i @heroicons/react`

# LocalStorage