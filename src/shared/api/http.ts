import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, getDoc, DocumentReference, DocumentData } from 'firebase/firestore'
import { fireDB, FireDbPaths } from "../config";


class HttpService {

    private path: FireDbPaths = 'contacts'
    private collection = collection(fireDB, this.path)


    public setCollectionPath(path: FireDbPaths) {
        this.path = path
        this.collection = collection(fireDB, path)
    }

    public async getAll<T extends { id: string }>(): Promise<T[]> {

        try {


            const data = await getDocs(this.collection)

            const response = data.docs.map(doc => ({ ...doc.data(), id: doc.id })) as T[]

            return Promise.resolve(response)

        } catch (e) {
            return Promise.reject(e)
        }
    }

    public async create<T extends { [x: string]: any; }>(params: T): Promise<void> {

        try {

            await addDoc(this.collection, params)

        } catch (e) {
            return Promise.reject(e)
        }
    }

    public async update<T>(id: string, params: Partial<T>): Promise<void> {

        try {

            const c_doc = doc(fireDB, this.path, id)
            await updateDoc<DocumentData>(c_doc as DocumentReference<DocumentData>, params)

        } catch (e) {
            return Promise.reject(e)
        }
    }

    public async delete<T>(id: string): Promise<void> {

        try {

            const c_doc = doc(fireDB, this.path, id)
            await deleteDoc(c_doc)

        } catch (e) {
            return Promise.reject(e)
        }
    }

    public async getOne<T>(id: string): Promise<T | undefined> {
        try {

            const docRef = doc(fireDB, this.path, id);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                return Promise.resolve(docSnap.data() as T)
            }

            return Promise.reject({message: 'Не найден'})

        }catch (e) {
            return Promise.reject({message: 'Не найден'})
        }
    }

}

export const httpService = new HttpService()