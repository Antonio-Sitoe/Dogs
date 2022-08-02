import { Dispatch, SetStateAction } from "react";
import { IPhotoGet } from "./interfaces";

export type SetModalPhoto = Dispatch<SetStateAction<IPhotoGet | null>>;
