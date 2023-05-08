import { useState } from "react"

/* Para identificar un hook personalizado
1. Observar el nombre del archivo -> Si comienza con use...
2. El hook personalizado tienen que usar alguno de los hooks de react. (useState, useEffect)
*/

export const useForm = (estadoInicial = {}) => {

    const [values, setValues] = useState(estadoInicial) /* estadoInicial = {nombre: '', apellido: '', avatar: ''} */

    const handleInputChange = ( e ) => {

        console.log(e.target)
        setValues({
            ...values, /* spread operator */ /* values = {nombre: 'M', apellido: '', avatar: ''} */
            [e.target.name]: e.target.value
        })

    }

    return [ values, handleInputChange ]

} 
