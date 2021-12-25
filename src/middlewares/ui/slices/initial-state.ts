export const initialUiState: {
    loading: boolean;
    errorMessage?: string;
} = {
  loading: false,
};

export type UiState = typeof initialUiState;
