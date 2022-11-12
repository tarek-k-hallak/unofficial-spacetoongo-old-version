
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../context/firebase'

export default function useContent(target) {
    const [content, setContent] = useState([])

    useEffect(() => {
        getDocs(collection(db, target))
            .then(snapshot => {
                const snapshotContent = snapshot.docs.map(doc => doc.data())
                setContent(snapshotContent)
            })
    }, [target])

    return { [target]: content }
}
