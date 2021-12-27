import { useAppSelector } from '../../hooks';

export function useGetStuff(id: string) {
    return useAppSelector((state) => state?.stuff?.lookup?.[id] || null);
}
