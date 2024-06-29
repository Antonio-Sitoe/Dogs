import { Dispatch, SetStateAction } from "react";
import { IPhotoGet, IUserStatisData } from "./interfaces";

export type SetModalPhoto = Dispatch<SetStateAction<IPhotoGet | null>>;

export type IFeedPhotosGetList = Array<IPhotoGet>;

export type UserStatisArrayData = Array<IUserStatisData>;
