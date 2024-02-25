import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Image } from '@chakra-ui/react';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string; 
}

const useGenres = ()=> useData<Genre>('/genres');
export default useGenres