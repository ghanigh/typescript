/*
Cette dependances est un outil qui permet de faciliter l'utilisation de redux.
*/
import { configureStore} from "@reduxjs/toolkit"

/*
ConfigureStore permet de créer le store plus simplement contrairement aux version précédentes de redux.

Cette méthode reçoit un objet en paramètre avec une propriété reducer qui utilise automatiquement combinerReducer.

La fonction configureStore se connecte automatiquement au DevTools

*/

export default configureStore({
    reducer: {}
})
