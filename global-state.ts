import {create} from 'zustand'

interface loadingStore {
    isLoading: boolean;
    setLoading: (status : boolean) => void;
}


export const loadingState = create<loadingStore>((set) => ({
    isLoading: false,
    setLoading: (status) => set({isLoading : status})
}))
