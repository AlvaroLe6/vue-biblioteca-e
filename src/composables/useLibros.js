import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from "vuefire";

export default function useLibros(){

    const db = useFirestore()
    const librosCollection = useCollection(collection(db, 'libro'))
    return{
        librosCollection
    }
    
}