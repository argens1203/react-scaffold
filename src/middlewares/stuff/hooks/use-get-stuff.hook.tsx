import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function useGetStuff(id: string){
    return useSelector((state: RootState) => state?.stuff?.lookup?.[id] || null);
}