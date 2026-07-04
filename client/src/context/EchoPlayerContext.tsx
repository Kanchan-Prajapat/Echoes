import {
    createContext,
    useContext,
} from "react";

import { Media } from "@/types/media";

export interface EchoPlayerContextValue {

   currentIndex: number;

    currentMedia: Media;

    paused: boolean;

    muted: boolean;

}

export const EchoPlayerContext =
createContext<EchoPlayerContextValue | null>(null);

export function useEchoPlayerContext(){

    const context =
    useContext(EchoPlayerContext);

    if(!context){

        throw new Error(
            "useEchoPlayerContext must be used inside EchoPlayerProvider."
        );

    }

    return context;

}